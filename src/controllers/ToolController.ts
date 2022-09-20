import { Controller, Get, Post, Put, Params, Body, Query, CurrentUser, Flow, Delete, State, Header } from 'koa-ts-controllers'

@Controller('/tool')
class ToolController {
  @Get('/list')
  async list() {
    return {
      code: 200,
      message: '访问成功了0',
      data: {
        id: 1,
        user_name: '管理员'
      }
    }
  }
}