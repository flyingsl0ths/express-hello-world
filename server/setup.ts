import { hello } from "./hello/hello.js";
import type express from "express";

type ServerConfig = {
  port: number;
  domainOrigin?: string | undefined;
};

export function withExpressApp(
  app: express.Express,
  config: ServerConfig = { port: 0, domainOrigin: process.env["DOMAIN"] }
): express.Express {
  const { port, domainOrigin = process.env["DOMAIN"] } = config;

  const domain = allowedOrigin(domainOrigin);

  setupRoutes(app, domain);

  if (port) {
    app.listen(port, (): void => {
      console.log(`Listening on port ${port}`);
      console.log(`Access-Control-Allow-Origin: ${domain}`);
    });
  }

  return app;
}

function allowedOrigin(allowedDomain: string | undefined): string {
  const inProduction = process.env["NODE_ENV"] === "production";
  return !inProduction ? allowedDomain ?? "*" : allowedDomain ?? "";
}

function setupRoutes(app: express.Express, origin: string) {
  app.get("/regular", (_, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.statusCode = 200;
    const message = { message: hello.sayHello("World!") };
    res.send(JSON.stringify(message));
  });

  app.get("/emoji", (_, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.statusCode = 200;
    const message = { message: hello.emojifiedSayHello("World!") };
    res.send(JSON.stringify(message));
  });
}
