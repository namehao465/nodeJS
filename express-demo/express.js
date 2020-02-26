var express=require('express');
var app=express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});


app.post('/admin',(req,res)=>{
    console.log(req)
    var data={
        code:200,
        msg:'success'
    }
    res.json(data);
})
app.get('/axios',(req,res)=>{
    res.send(req.query.id);
})

app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000/')
})