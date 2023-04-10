import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User   {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500})
  name: string;

  @Column({ length: 100})
  email: string;

  @Column({ length: 255})
  password: string;

  @Column({ type: 'boolean', default: false})
  active: boolean;
}
