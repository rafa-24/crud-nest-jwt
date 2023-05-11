import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items, ItemsDocuments} from './schema/item.schema';



@Injectable()
export class ItemsService {

  constructor(
    @InjectModel(Items.name) private itemsModule: Model<ItemsDocuments>
  ) {}  
  
  async create(createItemDto: CreateItemDto) {
    const itemCreated = await this.itemsModule.create(createItemDto);
    return itemCreated;
  }

  async findAll() {
    return await this.itemsModule.find();
  }

  async findOne(id: string) {
    const itemId = await this.itemsModule.findById( id );
    return itemId;
  }

  async update(id: string, updateItemDto: UpdateItemDto) {

    const payload = {
      name: updateItemDto.name,
      price: updateItemDto.price,
      description: updateItemDto.description
    }    
    const itemId = await this.itemsModule.updateOne({ _id: id }, payload);

    if (!itemId) throw new HttpException('BAD REQUEST', HttpStatus.BAD_REQUEST);

    return itemId;    
  }

  async remove(id: string) {
    return await this.itemsModule.deleteOne({_id: id})
  }

  // seleccionar un todo por id
  selectTodo() {}
}
