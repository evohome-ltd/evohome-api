import { AccountModel, UserModel } from '@app/database/models';
import { Injectable } from '@nestjs/common';

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
