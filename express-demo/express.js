var express=require('express');
var app=express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.header('Access-Control-Allow-Headers','mytoken')
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

app.get('/admin',(req,res)=>{
    res.send('Hello axios');
})

app.get('/axios',(req,res)=>{
    res.send('axios get (url) 传参' + req.query.id);
})

app.get('/axios/:id',(req,res)=>{
    res.send('axios get (Restful) 传参' + req.params.id);
})

app.delete('/axios',(req,res)=>{
    res.send('axios delete (url) 传参' + req.query.id);
})

app.delete('/axios/:id',(req,res)=>{
    res.send('axios delete (Restful) 传参' + req.params.id);
})

app.post('/axios',(req,res)=>{
    res.send('axios post 传参' + req.body.name + "---" + req.body.age);
})

app.put('/axios/:id',(req,res)=>{
    res.send('axios put 传参' + req.params.id + '---' + req.body.name + "---" + req.body.age);
})

app.get('/axios-json',(req,res)=>{
    res.json({
        name:'chenhao',
        age:28
    })
})

app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000/')
})