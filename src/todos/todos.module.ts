import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { JsonXML } from './convert.middleware';


@Module({
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JsonXML)
      .forRoutes({path: 'items', method: RequestMethod.GET })      
  }  
}
