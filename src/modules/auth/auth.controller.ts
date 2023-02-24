import { Request, Response } from "express";
import AuthService from "./auth.service";

class AuthController {
  static async getAuth(_req: Request, res: Response) {
    const data = await AuthService.getAuth();
    return res.status(200).json({
      sucess: true,
      data,
    });
  }
}

export default AuthController;
