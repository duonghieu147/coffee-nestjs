import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { banhmi } from './banhmi.entity';
import { UpdateResult,DeleteResult } from 'typeorm';


 
@Injectable()
export class BanhmiService {
    constructor(
        @InjectRepository(banhmi)
        private readonly banhmiRepo:Repository<banhmi>,
    ){}

    async findAll():Promise<banhmi[]>{
        return await this.banhmiRepo.find();
    }
    async findOne (id: number): Promise<banhmi> {
        return await this.banhmiRepo.findOne(id)
      }
    
    
      async create (banhmi: banhmi): Promise<banhmi> {
        return await this.banhmiRepo.save(banhmi)
      }
    
      async update(banhmi: banhmi): Promise<UpdateResult> {
        return await this.banhmiRepo.update( banhmi.banhmi_id, banhmi);
      }
    
      async delete(id): Promise<DeleteResult> {
        return await this.banhmiRepo.delete(id);
      }
}
