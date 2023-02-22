import express from "express";
import appInit from "./configs/app-init";

const app = express();

appInit(app);
