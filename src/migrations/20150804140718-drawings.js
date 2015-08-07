'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('drawings', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: Sequelize.INTEGER,
      girth_id: Sequelize.INTEGER,
      material_id: Sequelize.INTEGER,
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      json_body: Sequelize.TEXT
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('drawings');
  }
};
