module.exports = function( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );

	grunt.config( 'cssmin', {
		options : {
			sourceMap : true,
			keepSpecialComments : 1
		},
		dist : {
			src : '<%= dir.dist %>/<%= pkg.name %>.css',
			dest : '<%= dir.dist %>/<%= pkg.name %>.min.css'
		}
	});
};
