const AV = require('leanengine')
AV.init({
  appId: 'rzTb02G2QSk310hR5O2CTnig-gzGzoHsz',
  appKey: 'VmwFVP7TBGvzc4Dhv56LgFD1',
  masterKey: 'gkHsypYYsgyUqCvTt2LQhPOM',
  serverURLs: 'https://rztb02g2.lc-cn-n1-shared.com'
});

var app = require('./server');

// 监听端口
app.listen(80, () => {
  console.log(' DONE ', 'Compiled successfully in 10ms');
  console.log(`访问启动成功：`, 'http://localhost:80');
})