/**
 * Created by qtisa on 2017/7/30.
 */

const fs = require('fs');
const {join} = require('path');


module.exports = (app) => {

  [
    '/',
    '/tc'
  ].forEach(dir => {
    const route = dir;
    app.get(route, (req, res, next) => {
      res.set('Content-Type', 'text/html');
      fs.readFile(join(__dirname, '../../dist/', route, 'index.html'), function(err, html) {
        if (err) {
          console.log("err: " + err);
          res.send("<html><head/><body>empty: " + __dirname + "</body></html>");
          return;
        }
        res.send(html);
      });
    });
  });

};

