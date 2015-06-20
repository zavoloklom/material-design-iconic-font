module.exports = {
    font: {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            cwd: 'bower_components/material-design-iconic-font/dist/font/',
            dest: 'font/',
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