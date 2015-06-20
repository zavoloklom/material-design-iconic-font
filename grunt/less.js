module.exports = {
    prod: {
        options: {
            paths: ["less"],
            sourceMap: false
        },
        files: {
            "css/docs.md-iconic-font.css": "less/docs.md-iconic-font.less"
        }
    }
};