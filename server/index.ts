import express from "express";
import { withExpressApp } from "./setup.js";

withExpressApp(express(), { port: 3001 });
