module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    "css/main.css": "scss/main.scss"
                }
            }
        },
        
        uglify:{
            my_target: {
              files: {
                'javascript/index.min.js': ['javascript/index.js']
              }
            }            
        },
        
        cssmin :{
            combine: {
                files:{
                    'css/main.min.css':['css/main.css']
                }
            }
        }
    });
    
    // プラグインのロード
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // デフォルトタスクの設定
    grunt.registerTask('default', ['sass','cssmin']);
};