/**
 * Created by Ju on 6/20/2015.
 */

var express = require('express'),
    routes = require('./routes');
console.log("here we go");
var app = express();
app.use(express.static(__dirname + '/app'));    // ���þ�̬�ļ�Ŀ¼·��
// ��app����routes�У���routes/index.js�д���·������
routes(app);
// ��������
app.listen(3000);