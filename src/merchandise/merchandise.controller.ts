
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { merchandise } from './merchandise.entity';
import { MerchandiseService } from './merchandise.service';

@Controller('merchandise')
export class MerchandiseController {
    constructor ( private readonly merchandiseService:MerchandiseService){

    }
    @Get()
    findAll(): Promise<merchandise[]> {
      return this.merchandiseService.findAll()
    }
  
    @Get(':id')
    get(@Param() params) {
      return this.merchandiseService.findOne(params.id);
    }
  
    @Post()
    create(@Body() merchandise: merchandise) {
      return this.merchandiseService.create(merchandise);
    }
  
    @Put()
    update(@Body() merchandise: merchandise) {
      return this.merchandiseService.update(merchandise);
    }
  
    @Delete(':id')
    deleteUser(@Param() params) {
      return this.merchandiseService.delete(params.id);
    }
}


