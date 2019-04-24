import { Module } from '@nestjs/common';
import { GhibliModule } from './ghibli/ghibli.module';

@Module({
  imports: [GhibliModule],
})
export class AppModule {}
