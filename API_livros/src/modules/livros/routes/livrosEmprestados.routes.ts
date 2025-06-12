import { Router } from "express";
import LivrosEmprestadosController from "../controllers/LivrosEmprestadosController";
import isAuthenticated from "@shared/http/middlewares/isAuthenticated";

const livrosEmprestadosRouter = Router();
const livrosEmprestadosController = new LivrosEmprestadosController();

livrosEmprestadosRouter.use(isAuthenticated);

livrosEmprestadosRouter.get("/", async (req, res, next) => {
  try {
    await livrosEmprestadosController.index(req, res, next);
  } catch (error) {
    next(error);
  }
});

export default livrosEmprestadosRouter;
