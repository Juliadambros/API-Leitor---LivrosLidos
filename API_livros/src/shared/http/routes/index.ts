import leitoresRouter from "@modules/leitores/routes/leitores.routes";
import livrosRouter from "@modules/livros/routes/livros.routes";
import usersRouter from "@modules/users/routes/users.routes";
import { Router } from "express";

const routes = Router();
routes.use('/livros', livrosRouter);
routes.use('/leitores', leitoresRouter);
routes.use('/users', usersRouter);

export default routes;