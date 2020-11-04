import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';

import Ticket from './Ticket';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: String;

  @OneToMany(() => Ticket, ticket => ticket.user)
  tickets: Ticket[]

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default User;