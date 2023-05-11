import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Documentacion api')
    .setDescription('Documentacion de prueba')
    .setVersion('1.0')
    .addTag('items')
    .addTag('auth') 
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  // pipe de validacion
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
