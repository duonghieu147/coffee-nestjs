
import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

export class MerchandiseEntity {}

@Entity()
export class merchandise{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 }) 
  ten: string;

  @Column()
  gia: number;

  @Column()
  mota: string;

  @Column()
  url: string;
}
