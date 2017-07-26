const KoaBody = require('koa-body');
const Router = require('koa-router');
const { get, paint } = require('../controllers/square');

const router = new Router();

router
    .get('/squares/:x/:y', KoaBody(), get)
    .patch('/squares/:x/:y/paint', KoaBody(), paint);

module.exports = {
    squareRoutes() { return router.routes() },
    squareMethods() { return router.allowedMethods() }
};
