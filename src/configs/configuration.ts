import * as dotenv from "dotenv";
dotenv.config();

const configuration = {
  PORT: Number(process.env.PORT ?? 3000),
  PREFIX: process.env.PREFIX ?? "api/v1/demo",
};

export default configuration;
