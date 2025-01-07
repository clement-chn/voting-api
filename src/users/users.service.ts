import { BadRequestException, Injectable, Session } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private repo: Repository<User>) {

    }

    async create(email: string, password: string, isAdmin: boolean, isCandidate: boolean, isBanned: boolean) {
        
        const user = this.repo.create({email, password, isAdmin, isCandidate, isBanned})
        return await this.repo.save(user)
    }

    find(email: string) {
        const users = this.repo.findBy({email})
        return users
    }

    async findAll() {
        const users = await this.repo.find()
        return users
    }
}
