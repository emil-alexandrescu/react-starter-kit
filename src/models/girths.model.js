'use strict';

module.exports = function(sequelize, DataTypes) {
	var Girth = sequelize.define('Girth', {
		size: DataTypes.STRING,
    description: DataTypes.STRING
	},
	{ 
		tableName: 'girths',
	});

	return Girth;
};
