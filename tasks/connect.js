module.exports = function( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	grunt.config( 'connect', {
		dist : {
			options : {
				base : '_site'
			}
		}
	});
};
