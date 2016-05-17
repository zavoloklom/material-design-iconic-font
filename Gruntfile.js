module.exports = function(grunt) {

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        jitGrunt: {
            staticMappings: {
                replace: 'grunt-text-replace'
            }
        }
    });

    grunt.initConfig({
      watch: {
        css: {
          files: ['less/*.less'],
          tasks: ['less']
        }
      },
      less: {
            development: {
                options: {
                    paths: ["css/"],
                },
                files: {
                    "css/docs.md-iconic-font.min.css": "less/docs.md-iconic-font.less"
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
