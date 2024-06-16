import { AccountModel, UserModel } from '@app/database/models';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  public async getAllAccounts(): Promise<AccountModel[]> {
    return AccountModel.findAll({
      include: [UserModel],
    });
  }

  public async getAccount(id: string): Promise<AccountModel> {
    return AccountModel.findByPk(id, {
      include: [UserModel],
    });
  }
}
