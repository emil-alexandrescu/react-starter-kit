'use strict';

module.exports = function(sequelize, DataTypes) {
	var Material = sequelize.define('Material', {
		title: DataTypes.STRING,
    description: DataTypes.STRING
	},
	{ 
		tableName: 'materials',
	});

	return Material;
};
