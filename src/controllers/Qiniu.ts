import { Controller, Get, Post, Put, Params, Body, Query, CurrentUser, Flow, Delete, State, Header } from 'koa-ts-controllers'
import { QiniuFileManager, QiniuUploadConfig } from '../types/interface'
import { getUploadToken, deleteFile } from '../utils/qiniu'

@Controller('/qiniu')
class QiniuController {

  @Post('/sign')
  async sign(@Body() config: QiniuUploadConfig) {
    const token = getUploadToken(config)
    return {
      code: 200,
      msg: '获取成功',
      data: {
        token: token
      }
    }
  }

  @Post('/deleteFile')
  async fileDelete(@Body() config: QiniuFileManager) {
    try {
      const res = await deleteFile(config)
      console.log(res)
      return {
        code: 200,
        msg: '删除成功',
        data: {}
      }
    } catch (error) {
      return {
        code: 500,
        msg: '删除失败',
        data: error.error
      }
    }
    // deleteFile(config).then(res => {
    // }).catch(error => {
    //   console.log(error)
    // })
    // return {
    //   code: 200,
    //   msg: '获取成功',
    //   data: 123
    // }
  }
}