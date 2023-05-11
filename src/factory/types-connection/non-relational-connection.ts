import { DatabaseConnection } from '../database-connection.interface';
import { Injectable, UseFilters } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Injectable()
export class MongoConnection implements DatabaseConnection {
  async create() {
    const connectionMongo =
      TypeOrmModule.forRootAsync[
        'mongodb+srv://rafaprieto063:shirley1119@cluster0.zmhcpss.mongodb.net/'
      ];

    try {
      return connectionMongo === undefined
        ? 'Conexion a mongo exitosa'
        : 'No se pudo establecer conexion a mongo';
    } catch (err) {
      console.error(err);
    }
  }

  close(): string {
    return 'cerrando conexion mongo db';
  }
  getClient(): string {
    return 'Cliente mongo db';
  }
}
