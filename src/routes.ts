import { Express } from 'express'
import { createUserHandler } from './controller/user.controller';
import validate from "./middleware/validateRequest"
import { createUserSchema } from './schema/user.schema';


export default function (app: Express) {
    app.get('/healthcheck', (req, res) => {
        console.log("Healthcheck req!");

        res.sendStatus(200);
    })



    // Register user 
    app.post("/api/user", validate(createUserSchema), createUserHandler);




    // user login
    // POST /api/session

    // get user's session
    // GET /api/sessions

    // logout
    // DELETE /api/sessions



}