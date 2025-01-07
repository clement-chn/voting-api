import { Body, Controller, Get, Param, Post, Session } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create.user.dto';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { ChangeCandidate } from 'src/dto/change.candidate.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService, private authService: AuthService) {

    }

    @Post('/signup')
    async signUp(@Body() body: CreateUserDto, @Session() session: any) {
        const user = await this.authService.signup(body.email, body.password, false, false, false)
        return user
    }

    @Post('/changeOneToCandidate')
    async changeOneToCandidate(@Body() body: ChangeCandidate, @Session() session: any) {
        if (session.isAdmin === true) {
            return await this.usersService.changeOneToCandidate(body.userId, body.isCandidate)
        } else {
            console.log("vous n'avez pas le pouvoir requis pour effectuer cette action")
        }
    }

    @Post('/signin')
    async signIn(@Body() body: CreateUserDto, @Session() session: any) {
        const user = await this.authService.signin(body.email, body.password)
        console.log(user.id)
        session.userId = user.id
        session.email = user.email
        session.isAdmin = user.isAdmin
        return user
    }

    @Post('/signout')
    async signOut(@Session() session: any) {
        session.userId = null
        session.email = null
        session.isAdmin = null
        return session
    }

    @Get('/all')
    // @UseInterceptors(new SerializeInterceptor(UserDto))
    async findAllUsers() {
        const user = await this.usersService.findAll()
        return user
    }

    @Get('/:id')
    async findById(@Param('id') id: number) {
        const user = await this.usersService.findOne(id)
        return user
    }

}
