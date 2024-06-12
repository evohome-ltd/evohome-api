import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from '@app/auth/auth.service';
import { AccountModel } from '@app/database/models';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async findAll(): Promise<AccountModel[]> {
    return this.authService.getAllAccounts();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountModel> {
    return this.authService.getAccount(id);
  }
}
