'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('works', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      code: Sequelize.STRING,
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      work_date: Sequelize.DATE,
      req_date: Sequelize.DATE,

      user_id: Sequelize.INTEGER,
      customer_id: Sequelize.INTEGER,
      address_id: Sequelize.INTEGER,
      drawing_id: Sequelize.INTEGER,

      status: Sequelize.STRING,

      delivery_charge: Sequelize.FLOAT,
      price: Sequelize.FLOAT,
      tax: Sequelize.FLOAT
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('works');
  }
};
