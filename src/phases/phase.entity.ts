import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Phase {
    @PrimaryGeneratedColumn()
        id: number

    @Column()
        isRegistrationsPhase: boolean

    @Column()
        isVotingPhase: boolean
    
    @Column()
        isResultsPhase: boolean
    
}