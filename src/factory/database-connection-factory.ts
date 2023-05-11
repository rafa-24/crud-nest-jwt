import { Injectable } from '@nestjs/common';
import { PostgrestConnection } from '../../postgres-connection';
import { MongoConnection } from './types-connection/non-relational-connection';

//TODO: estructurar correctamentes las carpetas del patron factory

@Injectable()
export class DatabaseConnectionFactory {
  //TODO: es mejor usa un switch o un objeto implementar aqui la mejor opcion
  createConnection(nameDatabase: string) {
    if (nameDatabase === 'postgres') {
      const potsgresConnection = new PostgrestConnection();
      return potsgresConnection.create();
    } else {
      const mongoConnection = new MongoConnection();
      return mongoConnection.create();
    }
  }
}
