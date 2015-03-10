module.exports = function( grunt ) {
	'use strict';
	grunt.loadNpmTasks( 'grunt-contrib-copy' );

	// Project configuration.
	grunt.config( 'copy', {
		dist : {
			files : [
				{
					expand : true,
					flatten : true,
					filter : 'isFile',
					src : '<%= dir.dist %>/*',
					dest : '<%= dir.docs %>/styles'
				}
			]
		}
	});
};
