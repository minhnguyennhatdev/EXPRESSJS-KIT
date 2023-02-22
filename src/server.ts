import configuration from "@configs/configuration";

import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(configuration.PORT, () => {
  console.log(`Server running on PORT ${configuration.PORT}`);
});
