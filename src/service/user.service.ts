import { omit } from 'lodash';
import { DocumentDefinition } from 'mongoose';
import log from '../logger';
import User, { UserDocument } from '../model/user.model';

export async function createUser(input: DocumentDefinition<UserDocument>) {
    try {
        return await User.create(input);
    } catch (err: any) {
        throw new Error(err);
    }
}


export async function validatePassword(
    {
        email,
        password
    }: {
        email: UserDocument["email"],
        password: string
    }) {

    const user = await User.findOne({ email })

    if (!user) {
        log.error("User not found!")
        return false;
    }

    const isValid = user.comparePassword(password)
    if (!isValid)
        return false;

    return omit(user.toJSON(), "password")
}