import { Body, Controller, Get, Post, Session } from '@nestjs/common';
import { PhasesService } from './phases.service';

@Controller('phases')
export class PhasesController {

    constructor(private phasesService: PhasesService) {
    
        }

    @Get('/phase')
        async getPhaseTable() {
            const phase = await this.phasesService.findAll()
            return phase
        }

    @Post('/open')
        async open(@Session() session: any) {
            if (session.isAdmin === true) {
                const user = await this.phasesService.create(true, false, false)
                return user
            } else {return "vous n'avez pas les droits necessaires pour effectuer cette action"}
        }

    @Post('/close')
        async close(@Session() session: any) {
            if (session.isAdmin === true) {
                const user = await this.phasesService.create(false, false, false)
                return user
            } else {return "vous n'avez pas les droits necessaires pour effectuer cette action"}
        }
}
