import { IsEmail, IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class UserCreateResDto {
    signUpId: string;
    isCreated: boolean;
}
export class UserDto {
    @IsString({ message: 'Invalid email format' })
    @Matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, { message: 'Invalid Email found'})
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @IsString({ message: 'Mobile number must be a string' })
    @Matches(/^[6-9]\d{9}$/, { message: 'Mobile number must be 10 digits long and start with 6, 7, 8, or 9' })
    @IsNotEmpty({ message: 'Mobile number is required' })
    mobileNumber: string;

    @IsString({ message: 'First name must be a string' })
    @IsNotEmpty({ message: 'First name is required' })
    firstName: string;

    @IsString({ message: 'Last name must be a string' })
    @IsNotEmpty({ message: 'Last name is required' })
    lastName: string;

    @IsString({ message: 'Account number must be a string' })
    accountNumber: string;

    @IsString({ message : 'Please provide password' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/, { message : 'Password validation failed'})
    password: string;
}

export class UserLoginDto {
    @IsString({ message: 'Invalid email format' })
    @Matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, { message: 'Invalid Email found'})
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @IsString({ message : 'password must be a String' })
    @IsNotEmpty({ message : 'Password is mandatory' })
    password: string;
}