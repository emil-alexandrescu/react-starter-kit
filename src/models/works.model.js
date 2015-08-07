'use strict';

module.exports = function(sequelize, DataTypes) {
	var Work = sequelize.define('Work', {
		code: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    work_date: DataTypes.DATE,
    req_date: DataTypes.DATE,
    
    user_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    address_id: DataTypes.INTEGER,
    drawing_id: DataTypes.INTEGER,
    
    status: DataTypes.STRING,

    delivery_charge: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    tax: DataTypes.FLOAT
	},
	{ 
		tableName: 'works',
	});

	return Work;
};
