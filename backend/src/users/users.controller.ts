import { Body, Controller, Post } from '@nestjs/common';
import { UsersDto } from './dtos/users.dto';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  signup(@Body() body: UsersDto) {
    console.log(body);
  }
}
