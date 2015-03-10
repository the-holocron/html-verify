module.exports = function( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-banner' );

	grunt.config( 'usebanner', {
		dist : {
			options : {
				position : 'top',
				banner : '<%= banner %>',
				linebreak : true
			},
			files : {
				src : [
					'<%= dir.dist %>/*.css'
				]
			}
		}
	});
};
