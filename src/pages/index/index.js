// Load the template once
var template = require('marko').load(require.resolve('./template.marko'));

module.exports = function(req, res) {
    // Don't forget to set the expected HTTP headers for your HTML page:
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // Render the template to the HTTP resposne output stream.
    // The first argument is the view model and the second argument
    // is the output stream to write to.
    template.render({
            name: 'World',
            colors: ['red', 'green', 'blue']
        },
        res);
}