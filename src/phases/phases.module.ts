import { Module } from '@nestjs/common';
import { PhasesController } from './phases.controller';
import { PhasesService } from './phases.service';
import { Phase } from './phase.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Phase])],
  controllers: [PhasesController],
  providers: [PhasesService]
})
export class PhasesModule {}
