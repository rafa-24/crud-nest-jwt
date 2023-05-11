import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";


export class ItemsVerfifyMiddlewares implements NestMiddleware {
      use(req: Request, res: Response, next: NextFunction) {

            const body = req.body

            console.log('me ejecuto antes de llegar al controlador')
            
             body.name.length > 8 ? res.status(201).json({ message: 'mas de 8 caracteres', data: body.name })
            : res.status(201).json({message: 'menos de 8 caracteres', data: body.name})
      }
}