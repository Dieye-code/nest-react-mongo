import { NestFactory } from '@nestjs/core';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
import AppModule from './app.module';
import HttpExceptionFilter from './infrastructure/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot({}));
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters( new HttpExceptionFilter());

  await app.listen(3000);
}
bootstrap();
