import express, { Application } from "express";
import cors from "cors";
import { IncomingMessage, ServerResponse, Server } from "node:http";
import { mainApp } from "./mainApp";
import { connectDB } from "./utils/dbConfig";

const port: number = 2211;
const app: Application = express();

app.use(express.json());
app.use(cors());

mainApp(app);

const server: Server<typeof IncomingMessage, typeof ServerResponse> =
  app.listen(port, async () => {
    console.clear();
    connectDB();
  });

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException: ", error);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
