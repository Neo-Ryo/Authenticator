import { Request, Response } from "express";
import { status } from "../utils/serviceStatus";

export async function checkServiceStatus(req: Request, res: Response): Promise<void> {
    res.status(status.code).json(status.message);
}
