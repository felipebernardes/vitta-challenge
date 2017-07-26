const dbManager = require('../dbManager');

async function get(ctx, next) {
  ctx.body = {
    data: null,
    error: false
  };

  const x = ctx.params.x;
  const y = ctx.params.y;

  let conditions = [`'x', '=', ${x}`, `'y', '=', ${y}`];
  let result = await dbManager.getSquare('square', x, y);

  console.log("Result", result);

  ctx.body.data = result || { x, y, painted: false };

  await next();
}

async function paint(ctx, next) {
  ctx.body = {
    data: null,
    error: false
  };

  const x = ctx.params.x;
  const y = ctx.params.y;
  const data = {
    x,
    y,
    painted: true
  }

  ctx.body.data = await dbManager.createOrUpdate('square', data);
  ctx.status = 200;

  await next();
}

module.exports = { get, paint };
