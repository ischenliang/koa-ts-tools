const AV = require('leanengine')
AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'rzTb02G2QSk310hR5O2CTnig-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'VmwFVP7TBGvzc4Dhv56LgFD1',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'gkHsypYYsgyUqCvTt2LQhPOM'
});

var app = require('./server');

// 监听端口
// process.env.LEANCLOUD_APP_PORT || 80必须这样写，否则无法部署成功
app.listen(process.env.LEANCLOUD_APP_PORT || 80, () => {
  console.log(' DONE ', 'Compiled successfully in 10ms');
  console.log(`访问启动成功：`, 'http://localhost:80');
})