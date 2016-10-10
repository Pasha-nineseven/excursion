module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //WATCH настройки
    watch: {
      options: {
        spawn: false,
        livereload: true
      },

      styles: {
        files: [
          'src/scss/*.scss',
          'src/scss/components/*.scss',
          'src/scss/pages/*.scss',
        ],
        tasks: [
          'sass'
        ]
      },
    },

    //SASS настройки
    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'compact'
      },
      dist: {
        files: {
          'dist/css/style.css': 'src/scss/style.scss'
        }
      }
    },


  });
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['sass', 'watch', ]);
};