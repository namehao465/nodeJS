const http = require('http')

const server = http.createServer()

server.on('request',function (request,response) {
    response.setHeader("Access-Control-Allow-Origin","*");　　//允许所有域名访问
    console.log('received'+request.url)

    const url = request.url;
    if (url === '/axios'){
        response.end('axios'+request.query.id)
    }
})

server.listen(3000,function () {
    console.log('服务器启动成功，访问http://127.0.0.1:3000/')
})