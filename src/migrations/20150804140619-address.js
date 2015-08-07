'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('address', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: Sequelize.INTEGER,
      street_line1: Sequelize.STRING,
      street_line2: Sequelize.STRING,
      street_line3: Sequelize.STRING,
      street_line4: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      country: Sequelize.STRING,
      zipcode: Sequelize.STRING
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('address');
  }
};
