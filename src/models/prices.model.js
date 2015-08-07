'use strict';

module.exports = function(sequelize, DataTypes) {
	var Price = sequelize.define('Price', {
		material_id: DataTypes.INTEGER,
    girth_id: DataTypes.INTEGER,
    price: DataTypes.FLOAT
	},
	{ 
		tableName: 'prices',
	});

	return Price;
};
