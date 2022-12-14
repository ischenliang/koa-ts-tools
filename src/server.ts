import Koa from 'koa'
import KoaRouter from 'koa-router'
import AV from 'leanengine'
import loadWare from './config/middleware'
// 解析请求体
const app: Koa = new Koa()
import { bootstrapControllers as KoaControllers } from 'koa-ts-controllers'
// 实例化koa
const router: KoaRouter = new KoaRouter()


app.use(AV.koa2())


// 处理那些404不存在的
app.use(async (ctx: Koa.DefaultContext, next) => {
  // 设置ctx.state，模拟挂载用户数据效果
  ctx.state = {
    user: 'super',
    code: 200
  }
  if(parseInt(ctx.status) === 404){
    ctx.body = {
      code: 404,
      message: '404 NotFound'
    }
  }
  await next()
})

// 启动路由
;(async () => {
  await KoaControllers(app, {
    router: router, // 内部还是要使用router来实现路由绑定
    basePath: '/api', // 定义api的规则【所有接口的基础路径】
    versions: [1], // 版本
    // 存放所有控制器类，是数组
    controllers: [__dirname + '/controllers/**/*']
  })
  loadWare(app)
  // 注册路由
  app.use(router.routes())
})()

module.exports = app