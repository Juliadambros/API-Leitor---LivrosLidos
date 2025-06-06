import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from "@shared/http/middlewares/isAuthenticated";
import LeitoresController from "../controllers/LeitoresController";

const leitoresRouter = Router();
const leitoresController = new LeitoresController();

leitoresRouter.use(isAuthenticated);

leitoresRouter.get("/", async (req, res, next) => {
  try {
    await leitoresController.index(req, res, next);
  } catch (err) {
    next(err);
  }
});

leitoresRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  async (req, res, next) => {
    try {
      await leitoresController.show(req, res, next);
    } catch (err) {
      next(err);
    }
  }
);

leitoresRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      idade: Joi.number().integer().required(),
      tipo_de_livro: Joi.string().required(),
      genero_favorito: Joi.string().required(),
    },
  }),
  async (req, res, next) => {
    try {
      await leitoresController.create(req, res, next);
    } catch (err) {
      next(err);
    }
  }
);

leitoresRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      idade: Joi.number().integer().required(),
      tipo_de_livro: Joi.string().required(),
      genero_favorito: Joi.string().required(),
    },
  }),
  async (req, res, next) => {
    try {
      await leitoresController.update(req, res, next);
    } catch (err) {
      next(err);
    }
  }
);

leitoresRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  async (req, res, next) => {
    try {
      await leitoresController.delete(req, res, next);
    } catch (err) {
      next(err);
    }
  }
);

export default leitoresRouter;
