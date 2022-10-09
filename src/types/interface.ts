// 七牛上传配置
export interface QiniuUploadConfig {
  // 	AccessKey
  accessKey: string
  // SecretKey
  secretKey: string
  // 空间名称
  bucket: string
  // 有效期
  expires?: number
}


// 七牛云文件管理
export interface QiniuFileManager extends QiniuUploadConfig {
  // 文件路径
  fileName: string
}


/**
 * 图形验证码
 */
export interface VerifyCodeInter {
  id?: string // 验证码id
  last_id?: string // 上一次生成的验证码id
  code?: string // 验证码内容
  anser?: string // 验证码结果
  expire_at?: string // 有效期至
  createdAt?: string // 创建时间
}