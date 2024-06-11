import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users: any[] = [
    {
      id: 1,
      firstName: 'John',
      middleName: 'A',
      lastName: 'Doe',
    },
    {
      id: 2,
      firstName: 'Albert',
      middleName: 'B',
      lastName: 'Smith',
    },
    {
      id: 3,
      firstName: 'Nate',
      middleName: 'C',
      lastName: 'Win',
    }
  ];

  public async getAllUsers(): Promise<any> {
    return this.users;
  }

  public async getUser(id: number): Promise<any> {
    return this.users.find((user) => user.id === id);
  }
}
