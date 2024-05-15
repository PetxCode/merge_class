import { Application, Request, Response } from "express";
import web from "./router/webRouter";
import bookMark from "./router/bookMarkRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("/api", web);
    app.use("/api", bookMark);
    app.get("/", (req: Request, res: Response): Response => {
      try {
        return res.status(200).json({
          message: "This is the Default Route",
          status: 200,
        });
      } catch (error) {
        return res.status(404).json({
          message: "error",
          status: 404,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
