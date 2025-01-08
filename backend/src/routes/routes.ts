import { Router } from "express";
import sayHello from "../controllers/healthCheck";



export const router = Router()

router.get("/health", sayHello )


