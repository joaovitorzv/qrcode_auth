import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  UpdateDateColumn,
  CreateDateColumn
} from 'typeorm';

@Entity('flights')
class Flight {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column({ type: 'float' })
  price: number;

  @Column()
  company: string;

  @Column()
  departureTime: Date;

  @Column()
  arrivalTime: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Flight;