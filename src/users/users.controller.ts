import { Body, Controller, Get, Post, Session } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create.user.dto';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService, private authService: AuthService) {

    }

    @Post('/signup')
    async signUp(@Body() body: CreateUserDto, @Session() session: any) {
        const user = await this.authService.signup(body.email, body.password, body.isAdmin, body.isCandidate, body.isBanned)
        // session.id = user.id
        // session.email = user.email
        return user
    }

    @Get('/all')
    // @UseInterceptors(new SerializeInterceptor(UserDto))
    async findAllUsers() {
        const user = await this.usersService.findAll()
        return user
    }

}
