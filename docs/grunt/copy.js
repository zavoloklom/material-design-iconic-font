module.exports = {
    "font": {
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
    "animatecss": {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/animate.css/animate.min.css',
            dest: 'css/'
        }]
    },
    "jssocial-css": {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/jssocials/dist/jssocials.css',
            dest: 'css/'
        }]
    },
    "jssocial-js": {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/jssocials/dist/jssocials.min.js',
            dest: 'js/'
        }]
    },
    "highlight": {
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