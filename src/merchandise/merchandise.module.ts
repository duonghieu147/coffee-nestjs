import { Module } from '@nestjs/common';
import { MerchandiseService } from './merchandise.service';
import { MerchandiseController } from './merchandise.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import  { merchandise} from './merchandise.entity' ;

@Module({
  imports: [TypeOrmModule.forFeature([merchandise])],
  providers: [MerchandiseService],
  controllers: [MerchandiseController]
})
export class MerchandiseModule {}






