module.exports = function( grunt ) {
	'use strict';
	grunt.loadNpmTasks( 'grunt-autoprefixer' );

	// Project configuration.
	grunt.config( 'autoprefixer', {
		options : {
			map : true
		},
		dist : {
			src : '<%= dir.dist %>/*.css'
		}
	});
};
