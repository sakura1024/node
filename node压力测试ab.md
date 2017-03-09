##node压力测试ab.md

	启动server.js:  node sakura$ node server.js
	启动成功会显示：Server running at http://127.0.0.1:3000/
	打开终端另一窗口：node sakura$ ab -n1000 -c10   http://127.0.0.1:3000/
	（其中，n代表执行的所有文件数，c代表并发执行的文件数）

成功后显示的结果：
	This is ApacheBench, Version 2.3 <$Revision: 1748469 $>
	Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
	Licensed to The Apache Software Foundation, http://www.apache.org/

	Benchmarking 127.0.0.1 (be patient)
	Completed 100 requests
	Completed 200 requests
	Completed 300 requests
	Completed 400 requests
	Completed 500 requests
	Completed 600 requests
	Completed 700 requests
	Completed 800 requests
	Completed 900 requests
	Completed 1000 requests
	Finished 1000 requests


	Server Software:        
	Server Hostname:        127.0.0.1
	Server Port:            3000

	Document Path:          /
	Document Length:        13 bytes

	Concurrency Level:      10
	Time taken for tests:   0.250 seconds
	Complete requests:      1000
	Failed requests:        0
	Total transferred:      114000 bytes
	HTML transferred:       13000 bytes
	Requests per second:    3992.57 [#/sec] (mean)
	Time per request:       2.505 [ms] (mean)
	Time per request:       0.250 [ms] (mean, across all concurrent requests)
	Transfer rate:          444.49 [Kbytes/sec] received

	Connection Times (ms)
	              min  mean[+/-sd] median   max
	Connect:        0    0   0.1      0       1
	Processing:     1    2   1.9      2      19
	Waiting:        1    2   1.9      2      19
	Total:          1    2   1.9      2      19

	Percentage of the requests served within a certain time (ms)
	  50%      2
	  66%      2
	  75%      2
	  80%      3
	  90%      4
	  95%      6
	  98%      8
	  99%     12
	 100%     19 (longest request)


此外：比如说想测试百度的性能
node sakura $ ab -n1000 -c10 https://www.baidu.com/相关
相关资料：http://www.cnblogs.com/mankeheaven/p/6350112.html
