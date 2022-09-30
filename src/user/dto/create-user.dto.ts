import { IsEmail, Length } from 'class-validator';
import { UniqueOnDatabase } from 'src/auth/validations/unique-validation';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
  @Length(3)
  fullName: string;
  
  @IsEmail(undefined, { message: 'Неправильная почта' })
  @UniqueOnDatabase(UserEntity, {message: 'Такая почта уже используется!'})
  email: string;

  @Length(6, 32, { message: 'Пароль должен состоять из 6 символов' })
  password?: string;
}
