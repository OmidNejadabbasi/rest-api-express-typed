import { AnySchema } from 'yup';
import { Request, Response, NextFunction } from 'express';
import log from '../logger'

const validate = (schema: AnySchema) => async (
    req: Request,
    res: Response,
    next: NextFunction
) => {


    try {

        await schema.validate({
            body: req.body,
            params: req.params,
            query: req.query
        });

        return next();

    } catch (err) {
        log.error(err as object);
        res.status(409).send(err);
    }

}

export default validate;
