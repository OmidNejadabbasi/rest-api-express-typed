import jwt from "jsonwebtoken"
import config from "config"

const privateKey = config.get("privateKey") as string;


export function sign(object: Object, jwtOptions?: jwt.SignOptions | undefined) {
    return jwt.sign(object, privateKey, jwtOptions)
}