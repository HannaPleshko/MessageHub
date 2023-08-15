import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const { PORT } = process.env;

  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: ['http://localhost:3000'], credentials: true });

  try {
    await app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
