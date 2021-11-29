import { Express } from 'express'
import { createUserSessionHandler } from './controller/session.controller';
import { createUserHandler } from './controller/user.controller';
import validateRequest from "./middleware/validateRequest"
import { createSessionSchema } from './schema/session.schema';
import { createUserSchema } from './schema/user.schema';


export default function (app: Express) {
    app.get('/healthcheck', (req, res) => {
        console.log("Healthcheck req!");

        res.sendStatus(200);
    })



    // Register user 
    app.post("/api/user", validateRequest(createUserSchema), createUserHandler);




    // user login
    app.post("/api/sessions", validateRequest(createSessionSchema), createUserSessionHandler);


    // get user's session
    // GET /api/sessions

    // logout
    // DELETE /api/sessions



}