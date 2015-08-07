'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('girths', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      size: Sequelize.STRING,
      description: Sequelize.STRING
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('girths');
  }
};
