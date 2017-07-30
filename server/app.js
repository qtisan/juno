/**
 * Created by qtisa on 2017/7/30.
 */

const app = require('express')();
const config = require('./config');



const server = app.listen(config.port, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('server listening at http://%s:%s', host, port);
});

