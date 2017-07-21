const http = require('http'),
      Koa = require('koa'),
      config = require('./config'),
      errorHandler = require('./middlewares/error'),
      { routes, allowedMethods }  = require('./routes/territory'),
      app = new Koa();

app.use(errorHandler);
app.use(routes());
app.use(allowedMethods());

const server = http.createServer(app.callback()).listen(config.server.port, function () {
  console.log(`Quero trabalhar na Vitta! btw, ${ config.app.name } rodando na ${ config.server.port }`);
});

module.exports = {
  closeServer() {
    server.close();
  }
};
