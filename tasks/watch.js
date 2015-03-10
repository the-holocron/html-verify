module.exports = function( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.config( 'watch', {
		css : {
			files : '<%= dir.src %>/**/*.scss',
			tasks : [
				'clean',
				'build',
				'copy',
				'jekyll'
			]
		},
		jekyll : {
			files : [
				'docs/**/*.html',
				'_config.yml'
			],
			tasks : [
				'jekyll'
			]
		}
	});
};
