import { BufferEncoding } from '@app/common/enums';
import { AccountModel, UserModel } from '@app/database/models';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const [type, credentials] = (request.headers.authorization || '').split(' ');

    if (!type && !credentials) {
      throw new UnauthorizedException();
    }

    const [username, password] = Buffer.from(credentials, BufferEncoding.BASE64).toString().split(':');
    const account: AccountModel = await AccountModel.findOne({
      where: {
        username,
        password,
      },
      include: [UserModel],
    });
    request.user = account.toJSON();

    if (!account) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
