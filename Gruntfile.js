module.exports = function (grunt) { // obalovací funkce 
    grunt.initConfig({ 
        pkg: grunt.file.readJSON('package.json'), // cesta ke konfiguračnímu package.json 
        
        uglify: {
            default: {
                files: {
                'parts/js/script.min.js': [
                    'src/js/A.js',
                    'src/js/B.js'
                ]
                }
            }
        },
    
        // kompilace LESS souboru 
        less: { // název úlohy a její nastavení 
            dev: { 
                files: { 
                    "parts/css/style.css": ["src/less/index.less" ] 
                } 
            } 
        }
         
    }); 
  
    grunt.loadNpmTasks('grunt-contrib-less'); // chci načíst balíček grunt-contrib-less 
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['less','uglify']); // registrace defaultní úlohy 
    
 }; 
