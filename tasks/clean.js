module.exports = function( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-clean' );

	grunt.config( 'clean', {
		dist : [
			'<%= dir.dist %>',
			'_site/'
		]
	});
};
