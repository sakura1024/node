
//启动：node sakura$ node 4.request.js

/*结果：Status:200
headers:{"server":"nginx","date":"Thu, 09 Mar 2017 13:33:19 GMT","content-type":"text/html; charset=utf-8","transfer-encoding":"chunked","connection":"close","vary":"Accept-Encoding, Accept-Encoding","set-cookie":["PHPSESSID=c1b58vptkdn9obcsndfi861o40; path=/"],"expires":"Thu, 19 Nov 1981 08:52:00 GMT","cache-control":"no-store, no-cache, must-revalidate, post-check=0, pre-check=0","pragma":"no-cache"}
true
object
*/


var http=require('http');
var querystring=require('querystring');


//要传输给服务器的内容：即评论的内容
var postData=querystring.stringify({
	content:'不太懂，有点快，有的方法都不知道是干啥的',
	mid:11548
});


//request函数对应的第一个参数
var options={
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	method:'POST',
	header:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Cache-Control':'no-cache',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'PHPSESSID=1hmn3m3qc6j4djish5uec8a1j2; imooc_uuid=43e82e9b-7dae-470c-885c-decadefe0c27; imooc_isnew_ct=1488873103; loginstate=1; apsid=ZmZmUyNTUzODM4YTEyZjQ0Y2YwYTg5YjY4ZjViYmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjg1MjcxMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADlkYTk4ZDg1ZTBhY2U3MDNiZDIxMjc5ZjhlMmFmZjkxhGq%2BWIRqvlg%3DYT; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1488873104,1488954827; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1489064894; imooc_isnew=2; cvde=58be668f37cf5-424',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Pragma':'no-cache',
		'Referer':'http://www.imooc.com/video/11548',
		'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req=http.request(options,function(res){
	console.log('Status:'+res.statusCode);
	console.log('headers:'+JSON.stringify(res.headers));

	res.on('data',function(chuck){
		console.log(Buffer.isBuffer(chuck));
		console.log(typeof chuck);
	});

	res.on('end',function(){
		console.log('评论完毕');
	})

});


req.on('error',function(e){
	console.log('error:'+e.message);
});

req.write(postData);
req.end();








