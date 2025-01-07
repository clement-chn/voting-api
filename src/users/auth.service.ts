import { BadRequestException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { randomBytes, scrypt as _scrypt } from "crypto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { promisify } from "util";

const scrypt = promisify(_scrypt)

export class AuthService {

    constructor(@InjectRepository(User) private repo: Repository<User>, private UsersService: UsersService) {

    }

    async signup(email: string, password: string, isAdmin: boolean, isCandidate: boolean, isBanned: boolean) {
        const users = await this.UsersService.find(email)
        console.log(users)

        if (users.length) {
            throw new BadRequestException('email in use')
        }

        const salt = randomBytes(8).toString('hex')
    
        const hash = (await scrypt(password, salt, 32) as Buffer)
    
        const result = salt + '.' + hash.toString('hex')
        
        const user = this.UsersService.create(email, result, isAdmin, isCandidate, isBanned)
        
        return user
    }
}