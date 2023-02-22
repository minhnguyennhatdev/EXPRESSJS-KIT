import { Request, Response } from "express";
import HelloService from "./hello.service";

class HelloController {
  static async getHello(_req: Request, res: Response) {
    return await res.status(200).json({
      sucess: true,
      data: await HelloService.doHello(),
    });
  }
}

export default HelloController;
