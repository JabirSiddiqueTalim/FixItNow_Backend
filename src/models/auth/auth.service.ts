
import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";

import { ICreateUser } from "./auth.interface";



const createUserIntoDB = async (payload: ICreateUser) => {
    const isUserExists = await prisma.user.findUnique({
        where: {
            email: payload.email
        }
    })

    if (isUserExists) {
        throw new AppError(409, "User already exists")
    }
}


export const authService = {
    createUserIntoDB
}