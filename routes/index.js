/**
 * Created by Ju on 6/20/2015.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/MEAN-BLOG');  // �������ݿ⣬�ǵ�Ҫ����mongodb���ݿ�Ŷ
// ��������schema
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
    // ����������£�����ʱ������
    app.get('/posts', function (req, res) {
        Post.find({}).sort({date: -1}).exec(function (err, docs) {
            res.json(docs);
        });
        //res.json({status: 'done'});
    });
    // ���ղ��������µ����ݿ�
    app.post('/posts/add', function (req, res) {
        var post = new Post(req.body);
        post.save(function (err, docs) {
            res.json({status: 'done'});
        });
    });
// ���ݻ�ȡ��_id�������Ӧ������
// �����ǰ��������µ�JSON����ģ��������������ȡ
    app.get('/posts/:_id', function (req, res) {
        var _id = req.params._id;
        Post.findOne({_id: _id}).exec(function (err, docs) {
            res.json(docs);
        });
    });
// �����κ�δ�����·�������Ĭ����� index.html ҳ��
    app.get('*', function (req, res) {
        res.sendfile('app/index.html');
    });

};