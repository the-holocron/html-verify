module.exports = function( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-jekyll' );

	grunt.config( 'jekyll', {
		dist : {
			options : {
				bundleExec : true
			}
		}
	});
};
