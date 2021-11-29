import { object, string } from "yup";

export const createSessionSchema = object({
    body: object({
        password: string()
            .required("password is required")
            .min(8, "password is too short")
            .matches(/^[0-9a-zA-Z_.-]+$/, 'Password should only contain Latin letters'),

        email: string()
            .required("email is required ")
            .email("Must be a valid email")

    })
})