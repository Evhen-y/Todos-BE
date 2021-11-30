import {Joi} from "koa-joi-router"

 export const todoResponse = Joi.object({
     id: Joi.number().required(),
     text: Joi.string().required(),
     complited: Joi.boolean().required()
 })

 export const todosResponse = Joi.array().items(todoResponse)