const dbManager = require('../dbManager');

async function create(ctx, next) {
  ctx.body = {
    data: null,
    error: false
  };

  let data = ctx.request.body;
  data.area = (data.end.x - data.start.x) * (data.end.y - data.start.y);
  data.painted_area = 0;

  ctx.body.data = await dbManager.set('territories', data);
  ctx.status = 201;

  await next();
}

async function get(ctx, next) {
  ctx.body = {
    data: null,
    error: false
  };

  ctx.body.data = await dbManager.get('territories', ctx.params.id);
}

async function list(ctx, next) {
  ctx.body = {
    data: null,
    count: null,
    error: false
  };

  ctx.body.data = await dbManager.list('territories');
  ctx.body.count = ctx.body.data.length;
  ctx.status = 200;

  await next();
}

async function remove(ctx, next) {
  ctx.body = { error: false };

  await dbManager.remove('territories', ctx.params.id);
  ctx.status = 200;

  await next();
}

module.exports = { create, get, list, remove };
