import leitoresRouter from "@modules/leitores/routes/leitores.routes";
import livrosRouter from "@modules/livros/routes/livros.routes";
import usersRouter from "@modules/users/routes/users.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import passwordRouter from "@modules/users/routes/password.routes";
import profileRouter from "@modules/users/routes/profile.routes";
import { Router } from "express";
import livrosEmprestadosRouter from "@modules/livros/routes/livrosEmprestados.routes";

const routes = Router();
routes.use('/livros', livrosRouter);
routes.use('/leitores', leitoresRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/livros-emprestados', livrosEmprestadosRouter);

export default routes;