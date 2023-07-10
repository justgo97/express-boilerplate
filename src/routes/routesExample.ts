import { Router } from "express";
import Paths from "./consts";

const exampleRouter = Router();

// Example route
exampleRouter.get(Paths.Example.Test, async (req, res) => {
  return res.status(200).json("test");
});

export default exampleRouter;
