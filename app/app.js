const http = require('http'),
      Koa = require('koa'),
      config = require('./config'),
      errorHandler = require('./middlewares/error'),
      { territoryRoutes, territoryMethods }  = require('./routes/territory'),
      { squareRoutes, squareMethods }  = require('./routes/square'),
      { connect } = require('./db/db'),
      app = new Koa();

app.use(errorHandler);
app.use(territoryRoutes());
app.use(squareRoutes());
app.use(territoryMethods());
app.use(squareMethods());

const server = http.createServer(app.callback());

(async function() {
  await connect();
  server.listen(config.server.port, () => {
    console.log(`Quero *muito* trabalhar na Vitta! API ${ config.app.name } rodando em localhost:80`);
  });
})();
