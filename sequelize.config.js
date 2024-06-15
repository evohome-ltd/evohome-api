require('dotenv').config();
const Joi = require('joi');

const schema = Joi.object({
  DATABASE_HOST: Joi.string().hostname(),
  DATABASE_NAME: Joi.string(),
  DATABASE_PASSWORD: Joi.string(),
  DATABASE_PORT: Joi.number().port().default(3100),
  DATABASE_USER: Joi.string(),
  NODE_ENV: Joi.string().valid('development', 'local', 'production').default('local'),
});
const result = schema.validate(process.env, {
  abortEarly: false,
  presence: 'required',
  allowUnknown: true,
});

if (result.error) {
  throw result.error;
}

const config = result.value;

module.exports = {
  [config.NODE_ENV]: {
    database: config.DATABASE_NAME,
    dialect: 'mysql',
    host: config.DATABASE_HOST,
    password: config.DATABASE_PASSWORD,
    port: config.DATABASE_PORT,
    username: config.DATABASE_USER,
    migrationStorageTableName: 'sequelize_migrations',
  },
};
