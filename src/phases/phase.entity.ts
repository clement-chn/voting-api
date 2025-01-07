import { Column, PrimaryGeneratedColumn } from "typeorm";

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