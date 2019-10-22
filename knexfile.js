// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault:true,
    connection: {
      //filename: '.data/foxy_keto.pg',
      database: "foxyKeto",
      user: "postgres",
      password: "taylordev"
    },
    migrations:{
      directory:'./data/migrations'
    },
    seeds:{
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
