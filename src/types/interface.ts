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