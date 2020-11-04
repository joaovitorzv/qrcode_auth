import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToMany,
  ManyToOne
} from 'typeorm';

import Flight from './Flight';
import User from './User';

@Entity('tickets')
class Ticket {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('uuid')
  ticketId: string;

  @ManyToOne(() => Flight, { eager: true })
  @JoinColumn()
  flight: Flight;

  @ManyToOne(() => User, user => user.tickets, { eager: true })
  @JoinColumn()
  user: User;

  @Column({ default: false })
  expired: boolean;

  @Column({ default: null })
  validatedDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Ticket;