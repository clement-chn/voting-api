import { Injectable } from '@nestjs/common';
import { Phase } from './phase.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PhasesService {

    constructor(@InjectRepository(Phase) private repo: Repository<Phase>) {
    
    }

    async findAll() {
        const phase = await this.repo.find()
        console.log(phase)
        return phase
    }

    async create(isRegistrationsPhase: boolean, isVotingPhase: boolean, isResultsPhase: boolean) {
        
        const phase = this.repo.create({isRegistrationsPhase, isVotingPhase, isResultsPhase})
        return await this.repo.save(phase)
    }
}
