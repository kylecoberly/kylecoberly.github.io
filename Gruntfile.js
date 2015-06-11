//
// Base assemble starter
// V0.0.1
// -------------------------------------------------
//
// Availiable Grunt Tasks
// -----------------------
// grunt:server
// grunt:build:server
// grunt:build
// grunt:build:min
// grunt:docs
// grunt (test & build)
//
// -------------------------------------------------
// File ToDo
// Add postcss
// Create test task [ ]
// Clean up formatting [ ]
// Set Variables for paths? [ ]


module.exports = function (grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // show elapsed time at the end
    require('time-grunt')(grunt);

    // Begin base grunt config
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // -------------------------------------------------

        watch: {
            sass: {
                files: ['src/css/{,*/}*.{scss,sass}'],
                tasks: ['sass:build','cssmin']
            },
            javascript: {
                files: ['src/js/{,*/}*.js'],
                tasks: ['newer:concat']
            },
            assemble: {
                files: ['src/templates/{,*/}*.hbs'],
                tasks: ['newer:assemble:pages']
            },
            images: {
                files: [
                    'src/images/*.*',
                    'src/images/svg/*.*',
                ],
                tasks: ['newer:copy:img']
            },
        },

        // -------------------------------------------------

        browserSync: {
          default_options: {
            bsFiles: {
              src: [
                "build/css/*.css",
                "build/images/*.*",
                "build/images/svg/*.*",
                "build/js/*.js",
                "build/*.html"
              ]
            },
            options: {
              watchTask: true,
              startPath: "index.html",
              // xip:true - uncomment to use xip.io, see xip.io for more info
              server: {
                baseDir: "build",
                directory: true
              }
            }
          }
        },

        // -------------------------------------------------

        clean: {
          build: {
            files: [{
              dot: true,
              src: [
                '.tmp',
                'build/*',
                '!build/.git*',
                '!src/images/svg-src/*'
              ]
            }]
          },
          server: '.tmp'
        },

        // -------------------------------------------------

        sass: {
          build: {
            options: {
                style: 'compressed'
            },
            files:  {
              'build/css/styles.css': 'src/css/styles.scss'
            }
          },
        },

        // -------------------------------------------------

        concat: {
          options: {
            separator: ';',
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n\n',
          },
          head: {
            src: [
              'src/bower_components/modernizr/modernizr.js'
            ],
            dest: 'src/js/head.js',
          },
          main: {
            src: ['src/js/main.js','!src/js/libs/**/*.js'],
            dest: 'build/js/main.js',
          },
          plugins: {
            src: [
              // Add as plugins are used
            ],
            dest: 'build/js/plugins.js'
          },
        },

        // -------------------------------------------------

        assemble: {
          options: {
            expand: true,
            flatten: false,
            layout: 'src/templates/layouts/default.hbs',
            partials: 'src/templates/partials/*.hbs',
            assets: 'build',
            app: 'src'
          },
          pages: {
            files: [{
              expand: true,
              cwd: 'src/templates/pages/',
              src: '**/*.hbs',
              dest: 'build',
              ext: '.html'
            }]
          },
          docs: {
            files: [{
              assets: '../build',
              expand: true,
              cwd: 'docs/src/pages/',
              partials: 'docs/src/partials/*.md',
              src: '**/*.md',
              dest: 'docs',
              ext: '.html'
            }]
          }
        },

        // -------------------------------------------------

        imagemin: {
          build: {
            files: [{
              expand: true,
              cwd: 'src/images',
              src: '{,**/}*.{png,jpg,jpeg}',
              dest: 'build/images'
            }]
          }
        },

        // -------------------------------------------------

        grunticon: {
          myIcons: {
            files: [{
              expand: true,
              cwd: 'src/images/svg-src/',
              src: ['*.svg', '*.png'],
              dest: "src/images"
            }],
            options: {
              datasvgcss: "icons-data-svg.css",
              datapngcss: "icons-data-png.css",
              urlpngcss: "icons-fallback.css",
              loadersnippet: "grunticon-loader.txt"
            }
          }
        },

        // -------------------------------------------------

        cssmin: {
          build: {
            files: {
              'build/css/styles-min.css': [
              'build/css/styles.css'
              ]
            }
          }
        },

        // -------------------------------------------------

        copy: {
            build: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'src',
                    dest: 'build',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/!(svg-src)/**',
                        //'css/fonts/**/*.{eot,woff,svg,ttf,otf,me,css,md}', /*add the page specific css that doesn't get minified into site.css below*/
                        'fonts/*.{eot,woff,svg,ttf,otf,me,css,md}', /*font awesome fonts*/
                                    'files/**',
                                    'js/vendor/**'
                    ]
                }]
            },

            min: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'src',
                    dest: 'build',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/!(svg-src)/**',
                        'images/**',
                        'css/fonts/**/*.{eot,woff,svg,ttf,otf,me,css,md}', /*add the page specific css that doesn't get minified into site.css below*/
                        'fonts/*.{eot,woff,svg,ttf,otf,me,css,md}', /*font awesome fonts*/
                                    'files/**',
                                    'js/vendor/**'
                    ]
                }]
            },

            img: {
              files: [{
                expand: true,
                dot: true,
                cwd: 'src',
                dest: 'build',
                    src: [
                        'images/!(svg-src)/**',
                        'images/*.*',
                        //'images/**'
                    ]
              }]
            },

            svg: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'src/images/svg-src',
                    dest: 'build',
                    src: [
                        'images/**'
                    ]
                }]
            }

        },

        // -------------------------------------------------

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n\n',
            },
            build: {
                files: {
                    'build/js/head.js' : ['build/js/head.js'],
                    'build/js/main.js' : ['build/js/main.js'],
                    'build/js/plugins.js' : ['build/js/plugins.js']
                }
            }
        },

        // -------------------------------------------------
    });




    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-grunticon');

    // -------------------------------------------------

    grunt.registerTask('server', function (target) {

        // grunt server:build
        if (target === 'build') {
            return grunt.task.run(['build', 'browserSync', 'watch']);
        }

        grunt.task.run([
            'clean:server',
            'browserSync',
            'watch'
        ]);
    });

    // -------------------------------------------------

    grunt.registerTask('test', [
        'clean:server',
    ]);

    // -------------------------------------------------

    grunt.registerTask('build', function(target) {

        // grunt build:min
        if (target === "min") {
            return grunt.task.run([
                'clean:build',
                'assemble:pages',
                'sass:build',
                'concat',
                'cssmin',
                'copy:min',
                'copy:svg',
            ]);
        }

        grunt.task.run([
            'clean:build',
            'newer:assemble:pages',
            'newer:grunticon',
            'sass:build',
            'newer:imagemin',
            'concat',
            'cssmin',
            'newer:uglify',
            'copy:build',
            'copy:svg'
        ]);
    });

    // -------------------------------------------------

    grunt.registerTask('docs', function(target) {

        grunt.task.run([
            'assemble:docs'
        ]);
    });


    // -------------------------------------------------

    grunt.registerTask('default', [
        'test',
        'build'
    ]);

};
