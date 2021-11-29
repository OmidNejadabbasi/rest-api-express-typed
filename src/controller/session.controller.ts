import { Request, Response } from 'express';
import { omit } from 'lodash';
import { createUser, validatePassword } from '../service/user.service';
import log from '../logger'
import { createAccessToken, createSession } from '../service/session.service';
import config from 'config';
import { sign } from '../utils/jwt.utils';



export async function createUserSessionHandler(req: Request, res: Response) {

    try {
        // authorize user
        const user = await validatePassword(req.body)

        if (!user) {
            return res.status(401).send("Invalid username or Password")
        }


        // create session 
        const session = await createSession(user._id, req.get("user-agent") || "")

        const accessToken = createAccessToken({ user, session });

        // create refresh token
        const refreshToken = sign(session,
            { expiresIn: config.get("refreshTokenTtl") }  // 1 year
        );

        return res.send({accessToken, refreshToken})

    }
    catch (e) { }
}