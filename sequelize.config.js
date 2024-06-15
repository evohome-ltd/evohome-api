/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const Joi = require('joi');

const schema = Joi.object({
  DATABASE_HOST: Joi.string().hostname(),
  DATABASE_NAME: Joi.string(),
  DATABASE_PORT: Joi.number().port().default(3100),
  MIGRATION_DATABASE_PASSWORD: Joi.string(),
  MIGRATION_DATABASE_USER: Joi.string(),
  NODE_ENV: Joi.string().valid('development', 'local', 'production').default('local'),
});
const validationResult = schema.validate(process.env, {
  abortEarly: false,
  presence: 'required',
  allowUnknown: true,
});

if (validationResult.error) {
  throw validationResult.error;
}

const config = validationResult.value;

module.exports = {
  [config.NODE_ENV]: {
    database: config.DATABASE_NAME,
    dialect: 'mysql',
    host: config.DATABASE_HOST,
    password: config.MIGRATION_DATABASE_PASSWORD,
    port: config.DATABASE_PORT,
    username: config.MIGRATION_DATABASE_USER,
    migrationStorageTableName: 'sequelize_migrations',
  },
};
