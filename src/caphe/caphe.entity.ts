import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

export class CapheEntity {}

@Entity()
export class caphe{
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
