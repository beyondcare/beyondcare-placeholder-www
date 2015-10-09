sassFiles = {
    'assets/css/beyondcare.css': 'assets/scss/beyondcare.scss'
}

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    loadPath: 'bower_components/bootstrap-sass-official/assets/stylesheets/',
                },
                files: sassFiles
            },
            dist: {
                options: {
                    style: 'compressed',
                    loadPath: 'bower_components/bootstrap-sass-official/assets/stylesheets/',
                },
                files: sassFiles
            }
        },
        watch: {
            sass: {
                files: 'sass/*.scss',
                tasks: ['sass:dev']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('buildcss', ['sass:dist']);
};