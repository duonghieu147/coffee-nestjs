import { Injectable } from '@nestjs/common';
import { caphe } from './caphe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class CapheService {
    constructor(
       @InjectRepository(caphe)
       private readonly capheRepo: Repository<caphe>, 
    ){}
    async findAll (): Promise<caphe[]> {
        return await this.capheRepo.find();
      }
    
      async findOne (id: number): Promise<caphe> {
        return await this.capheRepo.findOne(id)
      }
    
    
      async create (caphe: caphe): Promise<caphe> {
        //const caphe1= this.capheRepo.create(caphe);
        return await this.capheRepo.save(caphe)
      }
    
      async update(caphe: caphe): Promise<UpdateResult> {
        return await this.capheRepo.update(caphe.id, caphe);
      }
    
      async delete(id): Promise<DeleteResult> {
        return await this.capheRepo.delete(id);
      }
}


