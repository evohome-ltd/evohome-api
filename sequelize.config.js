require('dotenv').config();

const env = process.env;

module.exports = {
  [env.NODE_ENV]: {
    database: env.DATABASE_NAME,
    dialect: 'mysql',
    host: env.DATABASE_HOST,
    password: env.DATABASE_PASSWORD,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USER,
    migrationStorageTableName: 'sequelize_migrations',
  },
};
