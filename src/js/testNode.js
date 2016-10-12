/**
 * Created by huoqiu on 16/8/15.
 */

var http = require('http');
var myObj = function (){

    this.name = "好金额"

    this.createServer = function (){
        return http.createServer(function (request, response) {

            // 发送 HTTP 头部
            // HTTP 状态值: 200 : OK
            // 内容类型: text/plain
            response.writeHead(200, {'Content-Type': 'text/plain'});

            // 发送响应数据 "Hello World"
            response.end('Hello Worldudheuwdehwdh\n');
        }).listen(8888);
    }
}

console.info(new myObj().createServer());


