import { Controller, Get, Post, Put, Params, Body, Query, CurrentUser, Flow, Delete, State, Header } from 'koa-ts-controllers'
import VerifyCode from '../models/VerifyCode'
import AV from 'leancloud-storage'
import { VerifyCodeInter } from '../types/interface'
import { useDiffTime, useFormatTime } from '../utils/time'


/**
 * 验证码相关
 */
@Controller('/verify_code')
class VerifyCodeController {

  /**
   * 生成图形验证码
   *  1：判断传入的last_id是否等于"-"
   *    等于：直接生成
   *    不等于：先删除last_id对应的数据，再生成新数据
   *  避免造成很多无用数据
   */
  @Post('/create')
  async img(@Body({ required: true }) config: { last_id: string }) {
    const verify_code = new VerifyCode()
    let tmp = null
    if (config.last_id === '-') {
      tmp = await verify_code.create()
    } else {
      await verify_code.delete(config.last_id)
      tmp = await verify_code.create()
    }
    return {
      code: 200,
      message: '验证码生成成功，十分钟内有效',
      data: tmp
    }
  }


  /**
   * 校验图形验证码
   *  1: 根据传入的config中的id去查找数据
   *  2：将查找好的数据的expire_at和当前时间对比，在当前时间之后代表有效
   *  3: 有效后再判断config中的anser和查找的数据的anser是否一致
   *     为了不区分大小写，所以都统一使用toUppercase()后再比较
   */
  @Post('/check')
  async check(@Body({ required: true }) config: { id: string, anser: string }) {
    const verify_code = new VerifyCode()
    const tmp: VerifyCodeInter = await verify_code.check(config.id)
    if (useDiffTime(null, tmp.expire_at) <= 0) {
      const flag = tmp.anser.toUpperCase() === config.anser.toUpperCase()
      return {
        code: flag ? 200 : 500,
        msg: flag ? '校验成功' : '校验失败',
        data: {}
      }
    }
    return {
      code: 500,
      message: '验证码已过期，请重新生成',
      data: {}
    }
  }
}