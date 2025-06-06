import SessionsController from "@modules/users/controllers/SessionsController"
import { celebrate, Joi, Segments } from "celebrate"
import { Router } from "express"

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post(
    "/",
    celebrate({
        [Segments.BODY]:{
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        },
    }),
    async(req, res, next) =>{
        try{
            await sessionsController.create(req, res, next)
        }catch(err){
            next(err);
        }
    }
)

export default sessionsRouter;