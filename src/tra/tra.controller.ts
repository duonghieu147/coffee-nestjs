import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { tra } from './tra.entity'
import { TraService } from './tra.service';

@Controller('tra')
export class TraController {
    constructor ( private readonly traService:TraService){

    }
    @Get()
    findAll(): Promise<tra[]> {
      return this.traService.findAll()
    }
  
    @Get(':id')
    get(@Param() params) {
      return this.traService.findOne(params.id);
    }
  
    @Post()
    create(@Body() tra: tra) {
      return this.traService.create(tra);
    }
  
    @Put()
    update(@Body() tra: tra) {
      return this.traService.update(tra);
    }
  
    @Delete(':id')
    deleteUser(@Param() params) {
      return this.traService.delete(params.id);
    }
}


