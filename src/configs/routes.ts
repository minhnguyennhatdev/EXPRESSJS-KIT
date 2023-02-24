import express from "express";
import AuthRoute from "../modules/auth/auth.route";
const routes = express();

routes.use("/", AuthRoute);

export default routes;
