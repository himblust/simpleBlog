// modules/logic.js

const serverlogic = function(req, res) {
    // check conditions for requests
    if (req.url == '/') {

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content
        res.write('<html><body><p>This is my home Page.</p></body></html>');
        // End response
        res.end();

    }
    else if (req.url == "/about") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is my about Page.</p></body></html>');
        res.end();

    }
    else if (req.url == "/impressum") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is my Impressum Page.</p></body></html>');
        res.end();

    }
    else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('<html><body><p>This path is not available. Invalid request</p></body></html>');
      res.end();
    }
  }

  module.exports = serverlogic;
