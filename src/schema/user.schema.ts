import { object, string, ref } from 'yup';



export const createUserSchema = object({

    body: object({
        name: string().required(),
        password: string()
            .required('Password is required')
            .min(6, "Min length is 6")
            .matches(/^[0-9a-zA-Z_.-]+$/, 'Password should only contain Latin letters'),
        passwordConfirmation: string().oneOf(
            [ref("password"), null],
            "Passwords don't match" // error arg
        ),
        email: string()
            .required()
            .email()
    })

})

