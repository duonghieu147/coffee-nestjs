import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export class BanhmiEntity {}

@Entity()
export class banhmi {
    @PrimaryGeneratedColumn()
    banhmi_id:number;

    @Column({ length: 255 }) 
    ten: string;

    @Column()
    gia: number;
}