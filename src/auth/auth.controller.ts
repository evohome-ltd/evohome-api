import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '@app/auth/auth.service';
import { AccountModel } from '@app/database/models';
import { AuthGuard } from '@app/auth/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async findAll(): Promise<AccountModel[]> {
    return this.authService.getAllAccounts();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string): Promise<AccountModel> {
    return this.authService.getAccount(id);
  }
}
