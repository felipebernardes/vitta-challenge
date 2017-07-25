const dbManager = require('../dbManager');

async function create(ctx, next) {
  ctx.body = {
    data: null,
    error: false
  };

  let data = ctx.request.body;
  data.area = (data.end.x - data.start.x) * (data.end.y - data.start.y);

  ctx.body.data = await dbManager.set('territory', data);
  ctx.status = 201;

  await next();
}

async function get(ctx, next) {
  ctx.body = {
    data: null,
    error: false
  };

  ctx.body.data = await dbManager.get('territory', ctx.params.id);
}

async function list(ctx, next) {
  ctx.body = {
    data: null,
    count: null,
    error: false
  };

  ctx.body.data = await dbManager.list('territory');
  ctx.body.count = ctx.body.data.length;
  ctx.status = 200;

  await next();
}

async function remove(ctx, next) {
  ctx.body = { error: false };

  await dbManager.remove('territory', ctx.params.id);
  ctx.status = 200;

  await next();
}

async function update(ctx, next) {
  ctx.body = {
    data: null,
    error: false
  };

  let data = ctx.request.body;
  data.area = (data.end.x - data.start.x) * (data.end.y - data.start.y);

  ctx.body.data = await dbManager.update('territory', ctx.params.id, data);
  ctx.status = 200;

  await next();
}

module.exports = { create, get, list, remove, update };
