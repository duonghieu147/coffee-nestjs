import { Injectable } from '@nestjs/common';
import { tra } from './tra.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class TraService {
    constructor(
       @InjectRepository(tra)
       private readonly traRepo: Repository<tra>, 
    ){}
    async findAll (): Promise<tra[]> {
        return await this.traRepo.find();
      }
    
      async findOne (id: number): Promise<tra> {
        return await this.traRepo.findOne(id)
      }
    
    
      async create (tra: tra): Promise<tra> {
        //const caphe1= this.capheRepo.create(caphe);
        return await this.traRepo.save(tra)
      }
    
      async update(tra: tra): Promise<UpdateResult> {
        return await this.traRepo.update(tra.id, tra);
      }
    
      async delete(id): Promise<DeleteResult> {
        return await this.traRepo.delete(id);
      }
}


