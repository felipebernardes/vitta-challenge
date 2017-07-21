const KoaBody = require('koa-body');
const Router = require('koa-router');
const { create, get, list, remove } = require('../controllers/territory');

const router = new Router();

router
    .delete('/territories/:id', KoaBody(), remove)
    .get('/territories/:id', KoaBody(), get)
    .get('/territories', KoaBody(), list)
    .post('/territories', KoaBody(), create);

module.exports = {
    routes() { return router.routes() },
    allowedMethods() { return router.allowedMethods() }
};
