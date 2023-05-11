import { Injectable } from '@nestjs/common';
import { PostgrestConnection } from './types-connection/postgres-connection';
import { MongoConnection } from './types-connection/non-relational-connection';
import { statSync } from 'fs';

@Injectable()
export class DatabaseConnectionFactory {
  createConnection(nameDatabase: string) {
    const objConnection = {
      mongo: new MongoConnection(),
      postgres: new PostgrestConnection(),
    };

    return nameDatabase === 'mongo'
      ? objConnection.mongo.create()
      : objConnection.postgres.create();
  }
}
