import express from "express";
import HelloRoute from "../modules/hello/hello.route";
const routes = express();

routes.use("/hello", HelloRoute);

export default routes;
