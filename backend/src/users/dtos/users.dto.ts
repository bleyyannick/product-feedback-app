import { IsNotEmpty, IsString } from 'class-validator';

export class UsersDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
