import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  index(): string {
    return 'index';
  }

  @Get('getUser')
  getUser(): any {
    return {
      id: 1,
      firstName: 'Serhii',
      lastName: 'Skveres',
    };
  }
}
