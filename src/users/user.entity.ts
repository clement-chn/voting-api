import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    isAdmin: boolean

    @Column()
    isCandidate: boolean

    @Column()
    isBanned: boolean
}