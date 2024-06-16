import { UserModel } from '@app/database/models/user.model';
import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'accounts' })
export class AccountModel extends Model {
  @Column(DataType.STRING(100))
  username: string;

  @Column(DataType.STRING(100))
  email: string;

  @Column(DataType.STRING(100))
  password: string;

  @Column(DataType.STRING(200))
  passwordHash: string;

  @HasOne(() => UserModel)
  user: UserModel;
}
