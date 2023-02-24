import express from "express";
import AuthController from "./auth.controller";
const AuthRoute = express.Router();

AuthRoute.get("/", AuthController.getAuth);

export default AuthRoute;
