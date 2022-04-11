import { Router } from "express";
import userCtrl from "../controllers/user.controller";

const userRouter = Router();

userRouter
  .route("/user")
  .get(userCtrl.listarUsuarios)
  .post(userCtrl.crearUsuarios);

export default userRouter;
