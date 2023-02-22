import * as dotenv from "dotenv";
dotenv.config();

const configuration = {
  PORT: Number(process.env.PORT ?? 3000),
};

export default configuration;
