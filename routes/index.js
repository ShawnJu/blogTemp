/**
 * Created by Ju on 6/20/2015.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/MEAN-BLOG');  // 连接数据库，记得要启动mongodb数据库哦
// 建立文章schema
var PostSchema = new Schema({
    title: String,
    content: String,
    date: {type: Date, default: Date.now()}
});

var Post = mongoose.model('Post', PostSchema);

var newpost = new Post({ title: 'Hello World', content:"hahaha Hello fucking world!!!" });
newpost.save(function (err) {
    if (err) return handleError(err);
    // saved!
});

console.log("we have connected mongoose.connect")

module.exports = function (app) {
    // 输出所有文章，并按时间排序
    app.get('/posts', function (req, res) {
        Post.find({}).sort({date: -1}).exec(function (err, docs) {
            res.json(docs);
        });
        //res.json({status: 'done'});
    });
    // 接收并保存文章到数据库
    app.post('/posts/add', function (req, res) {
        var post = new Post(req.body);
        post.save(function (err, docs) {
            res.json({status: 'done'});
        });
    });
// 根据获取的_id，输出对应的文章
// 评论是包含在文章的JSON里面的，所以无需另外获取
    app.get('/posts/:_id', function (req, res) {
        var _id = req.params._id;
        Post.findOne({_id: _id}).exec(function (err, docs) {
            res.json(docs);
        });
    });
// 其他任何未定义的路由情况都默认输出 index.html 页面
    app.get('*', function (req, res) {
        res.sendfile('app/index.html');
    });

};