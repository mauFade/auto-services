import "express-async-errors";
import express from "express";
import { createServer, Server } from "http";
import { errors } from "celebrate";
import cors from "cors";

import { appRoutes } from "./routes";

export class ExpressServer {
  private _port: number;
  private _express: express.Express;
  private _server: Server;

  constructor(port: number) {
    this._port = port;
    this._express = express();
    this._server = createServer(this._express);

    this.config();
    this.handlers();
    this.handleParseErrors();
  }

  private config(): void {
    this._express.use(
      cors({
        origin: "*",
      })
    );
    this._express.use(express.urlencoded({ extended: true }));
  }

  private handlers(): void {
    this._express.use(appRoutes);
  }

  private handleParseErrors(): void {
    this._express.use(
      errors({
        statusCode: 400,
      })
    );
  }

  public start(): void {
    this._server.listen(this._port);
    console.log(`SERVER RUNNING ON PORT ${this._port}`);
  }
}
