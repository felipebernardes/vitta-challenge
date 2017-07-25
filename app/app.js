const http = require('http'),
      Koa = require('koa'),
      config = require('./config'),
      errorHandler = require('./middlewares/error'),
      { routes, allowedMethods }  = require('./routes/territory'),
      { connect } = require('./db/db'),
      app = new Koa();

app.use(errorHandler);
app.use(routes());
app.use(allowedMethods());

const server = http.createServer(app.callback());

(async function() {
  await connect();
  server.listen(config.server.port, () => {
    console.log(`Quero trabalhar na Vitta! btw, ${ config.app.name } rodando na ${ config.server.port }`);
  });
})();
