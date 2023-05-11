import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Items, ItemsSchema } from './schema/item.schema';
import { ItemsVerfifyMiddlewares } from './items-verify.middlewares';


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Items.name,
        schema: ItemsSchema
      }
    ])    

  ],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ItemsVerfifyMiddlewares)
      .forRoutes({path: 'items', method: RequestMethod.POST })      
  }  
}
