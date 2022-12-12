module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'arjuna.db.elephantsql.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'emzvduth'),
      user: env('DATABASE_USERNAME', 'emzvduth'),
      password: env('DATABASE_PASSWORD', 'Aa1EGUurRjgQYwPvFMIqIYcehldEhysD'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
  
});
