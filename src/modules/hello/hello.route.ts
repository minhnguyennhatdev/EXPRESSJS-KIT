import express from "express";
import HelloController from "./hello.controller";
const HelloRoute = express.Router();

HelloRoute.get("/", HelloController.getHello);

export default HelloRoute;
