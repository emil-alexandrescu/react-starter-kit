'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      role: Sequelize.STRING,
      status: Sequelize.STRING
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('users');
  }
};
