import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

import { AccountModel } from './accout.model';

@Table({ tableName: 'users' })
export class UserModel extends Model {
  @Column(DataType.STRING(100))
  firstName: string;

  @Column(DataType.STRING(50))
  middleName: string;

  @Column(DataType.STRING(100))
  lastName: string;

  @ForeignKey(() => AccountModel)
  @Column
  accountId: number;

  @BelongsTo(() => AccountModel)
  account: AccountModel;
}
