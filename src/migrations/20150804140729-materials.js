'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('materials', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: Sequelize.STRING,
      description: Sequelize.STRING
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('materials');
  }
};
