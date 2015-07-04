module.exports = {
    font: {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            cwd: 'node_modules/material-design-iconic-font/dist/fonts/',
            dest: 'fonts/',
            src: ['{,*/}*']
        }]
    },
    animatecss: {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/animate.css/animate.min.css',
            dest: 'css/'
        }]
    },
    highlight: {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/jquery.highlight/jquery.highlight.js',
            dest: 'js/'
        }]
    }
};