import Koa from 'koa'
// import KoaBody from 'koa-body'
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors'

/**
 * 加载中间件
 * @param app koa实例
 */
export default function loadWare (app: Koa) {
  // app.use(KoaBody)
  app.use(bodyParser())

  app.use(cors({
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  }))
}