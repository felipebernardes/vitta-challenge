const dbManager = require('../dbManager');

async function patch(ctx, next) {
  ctx.body = {
    data: null,
    error: false
  };

  const x = ctx.params.x;
  const y = ctx.params.y;
  const data = {
    x,
    y,
    painted: null;
  }

  ctx.body.data = await dbManager.set('saquares', data);
  ctx.status = 200;

  await next();
}

async function get(ctx, next) {
  ctx.body = {
    data: null,
    error: false
  };

  const x = ctx.params.x;
  const y = ctx.params.y;
  const data = {
    x,
    y,
    painted: null;
  }

  ctx.body.data = await dbManager.get('squares', data);
}

module.exports = { create, get, list, remove };
