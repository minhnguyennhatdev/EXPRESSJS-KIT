import * as dotenv from "dotenv";
dotenv.config();

export default {
  PORT: Number(process.env.PORT ?? 3000),
};
