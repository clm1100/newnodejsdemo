const http = require('http');
const urllib = require('urllib');

const keepaliveAgent = new http.Agent({
  keepAlive: true,
});
const server = http.createServer((req, res) => {
  res.end('Hello World, ' + req.connection.remotePort);
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(3000);

function request() {
  urllib.request('http://127.0.0.1:3000', {
    agent: keepaliveAgent,
    dataType: 'text',
  }, (err, data, res) => {
    if (err) {
      console.error('error: %s, status: %s', err, res.status, res);
      throw err;
    }
    console.log('status: %s, data: %s', res.status, data, res);
  });
}

setInterval(request, 5000);
request();