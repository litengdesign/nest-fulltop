import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as mongoose  from 'mongoose'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  mongoose.connect('mongodb://localhost/liteng-nest',{
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:false
  })
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder()
    .setTitle('LitengDesign')
    .setDescription('Nestjs MongoDB Angular8')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
