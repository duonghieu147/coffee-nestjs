import { Injectable } from '@nestjs/common';
import { merchandise } from './merchandise.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
@Injectable()
export class MerchandiseService {
    constructor(
        @InjectRepository(merchandise)
        private readonly merchandiseRepo: Repository<merchandise>, 
     ){}
     async findAll (): Promise<merchandise[]> {
         return await this.merchandiseRepo.find();
       }
     
       async findOne (id: number): Promise<merchandise> {
         return await this.merchandiseRepo.findOne(id)
       }
     
     
       async create (merchandise: merchandise): Promise<merchandise> {
         return await this.merchandiseRepo.save(merchandise)
       }
     
       async update(merchandise: merchandise): Promise<UpdateResult> {
         return await this.merchandiseRepo.update(merchandise.id, merchandise);
       }
     
       async delete(id): Promise<DeleteResult> {
         return await this.merchandiseRepo.delete(id);
       }
 }
 

