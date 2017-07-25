const KoaBody = require('koa-body');
const Router = require('koa-router');
const { get, paint } = require('../controllers/squares');

const router = new Router();

router
    .get('/squares/:x/:y', KoaBody(), get)
    .patch('/squares/:x/:y/paint', KoaBody(), paint);

module.exports = {
    routes() { return router.routes() },
    allowedMethods() { return router.allowedMethods() }
};
