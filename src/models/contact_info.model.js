'use strict';

module.exports = function(sequelize, DataTypes) {
	var ContactInfo = sequelize.define('ContactInfo', {
		user_id: DataTypes.INTEGER,
    contact_type: DataTypes.INTEGER(1),
    value: DataTypes.STRING
	},
	{ 
		tableName: 'contact_info',
	});

	return ContactInfo;
};
