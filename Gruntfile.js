module.exports = function( grunt ) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON( 'package.json' ),
		version : grunt.file.readJSON( 'package.json' ).version,
		banner : '/*!\n' +
				' * HTML Verify - v<%= pkg.version %>\n' +
				' * <%= pkg.description %>\n' +
				' * http://chrisopedia.github.io/html-verify\n' +
				' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
				' */\n',
		dir : {
			docs : 'docs',
			dist : 'dist',
			src : 'src',
			vendor : 'vendor'
		}
	});

	// Load tasks
	grunt.loadTasks( 'tasks' );

	// Default task(s)
	grunt.registerTask( 'build', [
		'sass'
	]);
	grunt.registerTask( 'serve', [
		'jekyll',
		'connect',
		'watch'
	]);
	grunt.registerTask( 'dev', [
		'clean',
		'build',
		'copy',
		'serve'
	]);
	grunt.registerTask( 'deploy', [
		'clean',
		'build',
		'autoprefixer',
		'usebanner',
		'cssmin'
	]);
	grunt.registerTask( 'default', [ 'dev' ]);
};
