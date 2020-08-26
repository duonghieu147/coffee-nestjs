import { Module } from '@nestjs/common';
import { CapheService } from './caphe.service';
import { CapheController } from './caphe.controller';
import  { caphe} from './caphe.entity' 
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([caphe])],
  providers: [CapheService],
  controllers: [CapheController]
})
export class CapheModule {}
