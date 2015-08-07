'use strict';

module.exports = function(sequelize, DataTypes) {
	var Drawing = sequelize.define('User', {
		user_id: DataTypes.INTEGER,
		title: DataTypes.STRING,
		description: DataTypes.STRING,
		girth_id: DataTypes.INTEGER,
		material_id: DataTypes.INTEGER,
		json_body: DataTypes.TEXT,
	},
	{ 
		tableName: 'drawings',
	});

	return Drawing;
};
