const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    
    console.log(req.url);
    var p= url.parse(req.url,true).query;
    var a = Number(p.t1);
    var b= Number(p.t2);
    var area =a*b;
    res.write("Area of the rectangle is "+area);
    res.end();
    
}).listen(8000);