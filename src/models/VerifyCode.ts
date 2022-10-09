import AV from 'leancloud-storage'
import { generateVerifyCode } from '../utils/svg-captcha'
import moment from 'moment'
import { useFormatTime } from '../utils/time'

export default class VerifyCode {
  modelName = 'VerifyCode'
  // 生成图形验证码
  async create () {
    const instance = new AV.Object(this.modelName)
    const res = generateVerifyCode()
    instance.set('code', res.data)
    instance.set('anser', res.text)
    instance.set('expire_at', useFormatTime(moment().add(10, 'm')))
    const tmp = await instance.save()
    return {
      id: tmp.id,
      code: res.data
    }
  }

  // 验证图形验证码
  async check (id: string) {
    const obj = new AV.Query(this.modelName)
    const tmp: any = await obj.get(id)
    return {
      id: tmp.id,
      anser: tmp.attributes.anser,
      expire_at: tmp.attributes.expire_at
    }
  }

  // 删除图形验证码
  async delete (id: string) {
    const obj = AV.Object.createWithoutData(this.modelName, id)
    const tmp = await obj.destroy()
    return {
      id: tmp.id
    }
  }
}