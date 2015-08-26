module.exports = function(grunt){
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // require it at the top and pass in the grunt instance
    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({

        jshint: {
            ignore_warning: {
                options: {
                    '-W083': true,
                    '-W120' : false,
                },
                src: [
                    'src/js/script.js'
                ],
            },
        },

        uglify: {
            dist: {
                files: {
                    'js/main.min.js': [
                        'src/js/script.js'
                    ]
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expand',
                    sourcemap: 'none'
                },
                files: {
                    'css/styles.css': 'src/sass/styles.scss'
                }
            }
        },

        cssmin: {
            dist: {
                expand: true,
                cwd: 'css/',
                src: ['styles.css', '!*.min.css'],
                dest: 'css/',
                ext: '.min.css'
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: ''
                }]
            }
        },

        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    "index.html": ["src/tpl/index.jade"]
                }
            }
        },

        watch: {
            js: {
                files: ['src/js/*.js'],
                tasks: ['jshint', 'uglify' ],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: 'src/sass/**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
            jade: {
                files: 'src/tpl/**/*.jade',
                tasks: ['jade'],
                options:{
                    livreload: false,
                },
            },
        }

    });

    // ========= // CREATE TASKS =========
    // this default task will go through all configuration (dev and production) in each task
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'sass', 'imagemin']);
};