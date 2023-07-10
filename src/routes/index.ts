import { Router } from "express";
import exampleRouter from "./routesExample";
import Paths from "./consts";

const mainRouter = Router();

mainRouter.use(Paths.Base, exampleRouter);

export default mainRouter;
