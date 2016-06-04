module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/*.js'],
        dest: 'dist/main.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/main.min.js': ['dist/main.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat','uglify']);

};
