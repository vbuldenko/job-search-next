import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import { PATH } from "../utils/constants.js";
import { catchError } from "../middleware/index.js";

const router = Router();
router.post(PATH.signin, catchError(authController.login));
router.post(PATH.signup, catchError(authController.register));

export default router;
