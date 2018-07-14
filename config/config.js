module.exports = {
  development: {
    username: 'postgres',
    password: '',
    database: 'poe-currency-flipper',
    host: 'localhost',
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
  }
};