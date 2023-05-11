import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import axios from "axios";

@Injectable()
export class TodosService {
  create(createTodoDto: CreateTodoDto) {
    return 'This action adds a new todo';
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  async selectTodos(id: number) {
    try {
      const request = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      return request.data;      
    } catch (error) {
      console.error(error);      
    }
     
  }
}
