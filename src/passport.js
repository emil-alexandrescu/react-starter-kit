'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
	db = require('./models');
	
/**
 * Module init function.
 */
module.exports = function() {
	// Serialize sessions
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// Deserialize sessions
	passport.deserializeUser(function(id, done) {
		db.User.findOne({
			where: {
				id: id
			}
		})
		.then(function(user) {
			done(null, user);
		}, function(err) {
			done(err, null);
		});
	});

	// Initialize strategies
	require('./config/strategies/local.js');
};