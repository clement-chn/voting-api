import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { PhasesModule } from './phases/phases.module';
import { Phase } from './phases/phase.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'src/db.sqlite',
    entities: [User, Phase],
    synchronize: true
  }),
    UsersModule, PhasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
