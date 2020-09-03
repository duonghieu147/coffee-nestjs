import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

export class TraEntity {}

@Entity()
export class tra{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 }) 
  ten: string;

  @Column()
  gia: number;

  @Column()
  mota: string;

  @Column()
  url:string;


}
