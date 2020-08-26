import { Controller, Get ,Post,Put,Delete,Body,Param } from '@nestjs/common';
import { BanhmiService } from './banhmi.service';
import { banhmi } from './banhmi.entity';

@Controller('banhmi')
export class BanhmiController {
    constructor ( private readonly banhmiService:BanhmiService){

    }
    @Get()
    findAll():Promise<banhmi[]>{
      return this.banhmiService.findAll()
    }
  
    @Get(':id')
    get(@Param() params) {
      return this.banhmiService.findOne(params.id);
    }
  
    @Post()
    create(@Body() banhmi: banhmi) {
      return this.banhmiService.create(banhmi);
    }
  
    @Put()
    update(@Body() banhmi: banhmi) {
      return this.banhmiService.update(banhmi);
    }
  
    @Delete(':id')
    deleteUser(@Param() params) {
      return this.banhmiService.delete(params.id);
    }
     
}
