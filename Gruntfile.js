module.exports = function( grunt ) {

    // Project configuration.
    grunt.initConfig({

        // grunt metadata
        info : grunt.file.readJSON('package.json'),
        meta : {
            banner: '//\n'+
                '// <%= info.name %> - <%= info.description %>\n'+
                '// v<%= info.version %>\n'+
                '// <%= info.homepage %>\n'+
                '// copyright <%= info.copyright %> <%= grunt.template.today("yyyy") %>\n'+
                '// <%= info.license %> License\n'+
                '//\n'
        },

        // tasks

        // concat task to concat all css & js files
        concat : {
            css : {
                src : 'lib/*.css',
                dest : 'html-verify.css'
            }
        },

        // cssmin task to minifiy the css files
        cssmin : {
            add_banner : {
                options: {
                     banner : '<%= meta.banner %>'
                },
                files: {
                    'html-verify.min.css' : 'html-verify.css'
                }
            }
        },

        watch : {
            css : {
                files : [
                    'lib/**/*', 
                ],
                tasks: 'default'
            }
        }

    });

    // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    // Load the plugin that provides the "cssmin" task.
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    // Default task(s).
    grunt.registerTask( 'default', ['concat', 'cssmin'] );
    grunt.registerTask( 'dev', ['watch'] );

};
