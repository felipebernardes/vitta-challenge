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
    console.log(`Quero *muito* trabalhar na Vitta! API ${ config.app.name } rodando em localhost:80`);
  });
})();
