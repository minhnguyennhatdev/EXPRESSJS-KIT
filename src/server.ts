import express from "express";
import appInit from "./configs/appInit";

const app = express();

appInit(app);
