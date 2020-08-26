import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

export class CapheEntity {}

@Entity()
export class caphe{
  @PrimaryGeneratedColumn()
  caphe_id: number;

  @Column({ length: 255 }) 
  ten: string;

  @Column()
  gia: number;
}
