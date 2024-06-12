import { Injectable } from '@nestjs/common';
import { UserModel, AccountModel } from '@app/database/models';

@Injectable()
export class UsersService {
  public async getAllUsers(): Promise<UserModel[]> {
    return UserModel.findAll({
      include: [AccountModel],
    });
  }

  public async getUser(id: string): Promise<UserModel> {
    return UserModel.findByPk(id, {
      include: [AccountModel],
    });
  }
}
