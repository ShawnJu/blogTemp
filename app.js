/**
 * Created by Ju on 6/20/2015.
 */

var express = require('express'),
    routes = require('./routes');
console.log("here we go");
var app = express();
app.use(express.static(__dirname + '/app'));    // 设置静态文件目录路径
// 把app传入routes中，在routes/index.js中处理路由请求
routes(app);
// 启动服务
app.listen(3000);