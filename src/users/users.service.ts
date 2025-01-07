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

    async findOne(id: number) {
        const user = await this.repo.findOneBy({id})
        return user
    }

    async findAll() {
        const users = await this.repo.find()
        return users
    }

    async changeOneToCandidate(id: number, isCandidate: boolean) {
        const user = await this.repo.findOneBy({id})
        user.isCandidate = isCandidate
        return user
        // return await this.repo.save(user)
    }
}
