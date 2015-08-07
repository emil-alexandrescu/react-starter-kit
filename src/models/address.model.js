'use strict';

module.exports = function(sequelize, DataTypes) {
	var Address = sequelize.define('Address', {
		user_id: DataTypes.INTEGER,
    street_line1: DataTypes.STRING,
    street_line2: DataTypes.STRING,
    street_line3: DataTypes.STRING,
    street_line4: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zipcode: DataTypes.STRING
	},
	{ 
		tableName: 'address',
	});

	return Address;
};
