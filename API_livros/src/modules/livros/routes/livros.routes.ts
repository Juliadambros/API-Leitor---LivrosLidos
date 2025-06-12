import { Router } from "express";
import LivrosController from "../controllers/LivrosController";
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from "@shared/http/middlewares/isAuthenticated";

const livrosRouter = Router();
const livrosController = new LivrosController();

livrosRouter.use(isAuthenticated);

livrosRouter.get("/", async (req, res, next) => {
  try {
    await livrosController.index(req, res, next);
  } catch (err) {
    next(err);
  }
});

// Mostrar um livro específico
livrosRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  async (req, res, next) => {
    try {
      await livrosController.show(req, res, next);
    } catch (err) {
      next(err);
    }
  }
);

// Criar um novo livro
livrosRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      titulo: Joi.string().required(),
      autor: Joi.string().required(),
      nota: Joi.number().integer().min(1).max(5).required(),
      comentario: Joi.string().allow('', null),
      data_leitura: Joi.date().required(),
      emprestadoParaLeitorId: Joi.string().uuid().allow(null).required(),
    },
  }),
  async (req, res, next) => {
    try {
      await livrosController.create(req, res, next);
    } catch (err) {
      next(err);
    }
  }
);

// Atualizar um livro
livrosRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      titulo: Joi.string().required(),
      autor: Joi.string().required(),
      nota: Joi.number().integer().min(1).max(5).required(),
      comentario: Joi.string().allow('', null),
      data_leitura: Joi.date().required(),
      emprestadoParaLeitorId: Joi.string().uuid().allow(null).required(),
    },
  }),
  async (req, res, next) => {
    try {
      await livrosController.update(req, res, next);
    } catch (err) {
      next(err);
    }
  }
);

livrosRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  async (req, res, next) => {
    try {
      await livrosController.delete(req, res, next);
    } catch (err) {
      next(err);
    }
  }
);

export default livrosRouter;
