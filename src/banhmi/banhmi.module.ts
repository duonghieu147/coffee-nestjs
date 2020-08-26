import { Module } from '@nestjs/common';
import { BanhmiService } from './banhmi.service';
import { BanhmiController } from './banhmi.controller';
import { banhmi } from './banhmi.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[ TypeOrmModule.forFeature([banhmi])],
  providers: [BanhmiService],
  controllers: [BanhmiController]
})
export class BanhmiModule {}
