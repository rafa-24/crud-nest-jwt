import { DatabaseConnection } from './src/factory/types-connection/database-connection.interface';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class PostgrestConnection implements DatabaseConnection {
  async create() {
    const myDataSource = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'siuu',
      password: 'contraseña',
      database: 'veterinaria',
      synchronize: true,
    });

    return await myDataSource
      .initialize()
      .then(() => console.log('conexion establecida a base de datos Postgres'))
      .catch((err) => console.error(err));
  }

  close(): string {
    return 'cerrando conexion';
  }
  getClient(): string {
    return 'tipo de cliente SQL Databse';
  }
}
