const { Sequelize } = require('sequelize');

const { database } = require('../../config');

class DatabaseService {
  constructor() {
    this.db = null;
  }

  async init() {
    this.db = new Sequelize(database['connectionString']);
    try {
      console.info(`init::: Connecting to (${database['connectionString']})`);
      await this.db.authenticate();
      console.info(`init::: Connected to (${database['connectionString']})`);
    } catch(err) {
      console.error('init::: Postgres exception -', err);
    }
  }
}

class Database {
  constructor() {
    if (!Database.service) {
      Database.service = new DatabaseService();
    }
  }

  /**
   *
   * @returns {null}
   */
  getDatabase() {
    return Database.service.db;
  }

  /**
   * @returns {DatabaseService}
   */
  getService() {
    return Database.service;
  }
}

module.exports = Database;
