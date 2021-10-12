import { Router } from "express";
import { checkServiceStatus } from "../controllers/statusController";

export const statusRouter = Router();

statusRouter.get("/", checkServiceStatus);
