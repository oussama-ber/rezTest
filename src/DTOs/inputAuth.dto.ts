/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEmail, IsString, MinLength  } from 'class-validator';

export class LoginDto {
    @IsNotEmpty()
    @IsEmail({}, {message: 'Please enter valid email'})
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    password: string;
}