import { Module } from '@nestjs/common';
import { TraService } from './tra.service';
import { TraController } from './tra.controller';
import  { tra} from './tra.entity' 
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([tra])],
  providers: [TraService],
  controllers: [TraController]
})
export class TraModule {}
