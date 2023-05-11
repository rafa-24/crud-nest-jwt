import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { json2xml, xml2json } from "jsonxml";

@Injectable()
export class JsonXML implements NestMiddleware {
      use(req: Request, res: Response, next: NextFunction) {
            console.log('probando middleware')
      }
}