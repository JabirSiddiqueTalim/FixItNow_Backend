import { NextFunction, Request, Response } from "express";

import { authService } from "./auth.service";
import httpStatus from "http-status";
import { easycontroller } from "../../utils/easyController";

const createUser = easycontroller(async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const result = await authService.createUserIntoDB(payload);

    res.status(httpStatus.CREATED).json({
        success: true,
        statusCode: httpStatus.CREATED,
        message: "User created successfully",
        data: result
    })
})

export const authController = { 
    createUser
}