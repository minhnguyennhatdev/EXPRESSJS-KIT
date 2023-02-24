import express, { Express } from "express";
import configuration from "./configuration";
import Routes from "./routes";

function appInit(app: Express) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(configuration.PREFIX, Routes);
  app.listen(configuration.PORT, () => {
    console.log(
      `Server running on PORT ${configuration.PORT} ${configuration.PREFIX}`,
    );
  });
}

export default appInit;
