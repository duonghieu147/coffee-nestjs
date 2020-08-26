import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";

export class TraEntity {}

@Entity()
export class tra{
  @PrimaryGeneratedColumn()
  tra_id: number;

  @Column({ length: 255 }) 
  ten: string;

  @Column()
  gia: number;
}
