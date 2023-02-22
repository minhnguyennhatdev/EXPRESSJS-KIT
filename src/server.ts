import express from "express";
import configuration from "./configs/configuration";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(configuration.PORT, () => {
  console.log(`Server running on PORT ${configuration.PORT}`);
});
