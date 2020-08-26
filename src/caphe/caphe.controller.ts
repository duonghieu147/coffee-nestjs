import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { caphe } from './caphe.entity'
import { CapheService } from './caphe.service';

@Controller('caphe')
export class CapheController {
    constructor ( private readonly capheService:CapheService){

    }
    @Get()
    findAll(): Promise<caphe[]> {
      return this.capheService.findAll()
    }
  
    @Get(':id')
    get(@Param() params) {
      return this.capheService.findOne(params.id);
    }
  
    @Post()
    create(@Body() caphe: caphe) {
      return this.capheService.create(caphe);
    }
  
    @Put()
    update(@Body() caphe: caphe) {
      return this.capheService.update(caphe);
    }
  
    @Delete(':id')
    deleteUser(@Param() params) {
      return this.capheService.delete(params.id);
    }
}


