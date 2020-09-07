module.exports = [{
  name: "development",
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true, // switch this to false once you have the initial tables created and use migrations instead
  logging: true,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber"
  }
}];