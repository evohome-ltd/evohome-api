import { DatabaseDialect, Environment } from '@app/common/enums';
import { Injectable } from '@nestjs/common';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import Joi from 'joi';

@Injectable()
export class ConfigService {
  private readonly schema: Joi.ObjectSchema = Joi.object({
    DATABASE_HOST: Joi.string().hostname(),
    DATABASE_NAME: Joi.string(),
    DATABASE_PASSWORD: Joi.string(),
    DATABASE_PORT: Joi.number().port().default(3100),
    DATABASE_USER: Joi.string(),
    NODE_ENV: Joi.string()
      .valid(Environment.DEVELOPMENT, Environment.LOCAL, Environment.PRODUCTION, Environment.TEST)
      .default(Environment.LOCAL),
    PORT: Joi.number().port().default(3000),
  });
  private readonly config: any;

  constructor() {
    const validationResult: Joi.ValidationResult = this.schema.validate(process.env, {
      abortEarly: false,
      presence: 'required',
      allowUnknown: true,
    });

    if (validationResult.error) {
      throw validationResult.error;
    }

    this.config = validationResult.value;
  }

  public get databaseOptions(): SequelizeModuleOptions {
    return {
      dialect: DatabaseDialect.MYSQL,
      host: this.config.DATABASE_HOST,
      username: this.config.DATABASE_USER,
      password: this.config.DATABASE_PASSWORD,
      port: this.config.DATABASE_PORT,
      database: this.config.DATABASE_NAME,
    };
  }

  public get port(): number {
    return this.config.PORT;
  }
}
