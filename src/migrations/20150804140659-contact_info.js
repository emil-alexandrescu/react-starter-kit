'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('contact_info', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: Sequelize.INTEGER,
      contact_type: Sequelize.INTEGER(1),
      value: Sequelize.STRING
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('contact_info');
  }
};
