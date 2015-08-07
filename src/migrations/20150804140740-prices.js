'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('prices', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      material_id: Sequelize.INTEGER,
      girth_id: Sequelize.INTEGER,
      price: Sequelize.FLOAT
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('prices');
  }
};
