import { IsEmail, Length } from 'class-validator';

export class LoginUserDto {
  @IsEmail(undefined, { message: 'Неправильная почта' })
  email: string;

  @Length(6, 32, { message: 'Пароль должен состоять из 6 символов' })
  password?: string;
}
