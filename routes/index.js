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
    comments: [{comment: String}],
    date: {type: Date, default: Date.now()}
});

console.log("we have connected mongoose.connect")

module.exports = function (app) {
    // ����������£�����ʱ������
    app.get('/posts', function (req, res) {
        Post.find({}).sort({date: -1}).exec(function (err, docs) {
            res.json(docs);
        });
    });
    // ���ղ��������µ����ݿ�
    app.post('/post/add', function (req, res) {
        var post = new Post(req.body);
        post.save(function (err, docs) {
            res.json({status: 'done'});
        });
    });
// ���ݻ�ȡ��_id�������Ӧ������
// �����ǰ��������µ�JSON����ģ��������������ȡ
    app.get('/post/:_id', function (req, res) {
        var _id = req.params._id;
        Post.findOne({_id: _id}).exec(function (err, docs) {
            res.json(docs);
        });
    });
// �洢���¶�Ӧ������
    app.post('/post/:_id/comment', function (req, res) {
        var _id = req.params._id,
            comment = req.body;
        Post.update({_id: _id}, {$push: {comments: comment}}).exec(function (err, docs) {
            res.json({status: 'done'});
        });
    });
// �����κ�δ�����·�������Ĭ����� index.html ҳ��
    app.get('*', function (req, res) {
        res.sendfile('app/index.html');
    });

};