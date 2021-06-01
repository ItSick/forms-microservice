import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Server Main');
  const microserviceOptions = {
    transport:Transport.TCP,
    options: {
      host: '127.0.0.1',
      port:8877,
    },
  }
  const app = await NestFactory.createMicroservice(AppModule,microserviceOptions);
  await app.listen(
    () => {
      logger.log('listening on port 8877 server')
      console.log('...listening to port 8877');
    }
  );     
}
bootstrap();
