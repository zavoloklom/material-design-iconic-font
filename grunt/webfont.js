module.exports = {
    'prod': {
        src: 'svg/prod/*/*.svg',
        dest: 'dist/font',
        destCss: 'less/temp',
        options: {
            font: 'Material-Design-Iconic-Font',
            syntax: 'bootstrap',
            stylesheet: 'less',
            centerHorizontally : true,
            normalize: true,
            template: 'grunt/templates/glyphs.css',
            destHtml: 'dist',
            htmlDemoTemplate: 'grunt/templates/glyphs.html',
            templateOptions: {
                baseClass:   'zmdi',
                classPrefix: 'zmdi-',
                mixinPrefix: 'zmdi-'
            }
        }
    },
    'dev': {
        src: 'svg/prod/*/*.svg',
        dest: 'test/font',
        destCss: 'less/temp',
        options: {
            font: 'Material-Design-Iconic-Font',
            syntax: 'bootstrap',
            styles: 'icon',
            stylesheet: 'less',
            centerHorizontally : true,
            normalize: true,
            template: 'grunt/templates/glyphs.css',
            destHtml: 'test',
            htmlDemoTemplate: 'grunt/templates/glyphs.html',
            templateOptions: {
                baseClass:   'zmdi',
                classPrefix: 'zmdi-',
                mixinPrefix: 'zmdi-'
            }
        }
    }
};