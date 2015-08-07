'use strict';
/**
	* User Model
	*/

var md5 = require('md5');

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: 3,
					msg: 'Name must be at least 3 characters.'
				}
			}
		},
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		password: DataTypes.STRING,
		role: DataTypes.STRING,
		status: DataTypes.STRING
	},
	{ 
		scopes: {
			admin: {
				where: {
					role: 'admin'
				}
			},
			employee: {
				where: {
					role: 'employee'
				}
			},
			customer: {
				where: {
					role: 'customer'
				}
			}
		},
		classMethods: {
			encryptPassword: function(password) {
				return md5(password);
			}
		},
		instanceMethods: {	
			authenticate: function(password) {
				return md5(password) === this.password;
			}
		},
		tableName: 'users',
	});

	return User;
};
