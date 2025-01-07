import { IsBoolean, IsEmail, IsOptional, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    
    @IsEmail()
    email: string

    @IsStrongPassword()
    password: string

    @IsBoolean()
    @IsOptional()
    isAdmin: boolean

    @IsBoolean()
    @IsOptional()
    isCandidate: boolean

    @IsBoolean()
    @IsOptional()
    isBanned: boolean

}