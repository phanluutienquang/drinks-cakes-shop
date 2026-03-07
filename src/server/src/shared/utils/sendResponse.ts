import { Response } from "express";

const sendResponse = (
    res: Response,
    statusCode: number,
    payload: { data?: any; message?: string }
): void => {
    res.status(statusCode).json(payload);
};

export default sendResponse;