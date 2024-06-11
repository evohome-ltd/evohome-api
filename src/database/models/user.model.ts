import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export class UserModel extends Model {
  @Column
  firstName: string;

  @Column
  middleName: string;

  @Column
  lastName: string;
}
