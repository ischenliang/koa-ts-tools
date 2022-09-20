"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const leanengine_1 = __importDefault(require("leanengine"));
// 解析请求体
const app = new koa_1.default();
const koa_ts_controllers_1 = require("koa-ts-controllers");
// 实例化koa
const router = new koa_router_1.default();
app.use(leanengine_1.default.koa2());
// 处理那些404不存在的
app.use(async (ctx, next) => {
    // 设置ctx.state，模拟挂载用户数据效果
    ctx.state = {
        user: 'super',
        code: 200
    };
    if (parseInt(ctx.status) === 404) {
        ctx.body = {
            code: 404,
            message: '404 NotFound'
        };
    }
    await next();
});
(async () => {
    await (0, koa_ts_controllers_1.bootstrapControllers)(app, {
        router: router,
        basePath: '/api',
        versions: [1],
        // 存放所有控制器类，是数组
        controllers: [__dirname + '/controllers/**/*']
    });
    // 注册路由
    app.use(router.routes());
})();
module.exports = app;
//# sourceMappingURL=server.js.map