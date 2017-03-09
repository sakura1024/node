//处理抓到的html为我想要的数据
var http=require("http");
var cheerio=require("cheerio");

var url="http://www.imooc.com/learn/637";


function filterChapters(html){
	var $=cheerio.load(html);
	var chapters=$(".chapter");

	var courseData=[];
	chapters.each(function (item) {
		var chapter=$(this);
		var chapterTitle=chapter.find(".icon-chapter").text();
		// var chapterId=chapter.find("strong").text();
		var videos=chapter.find(".video").children("li");
		// var id=videos.attr("data-media-id");
		var chapterData={
			chapterTitle: chapterTitle,
			videos: [],
		}
		videos.each(function (item) {
			var video=$(this).find('.J-media-item');
			var videoTitle=video.text();
			var id=video.attr('href').substring(7);
			chapterData.videos.push({
				videoTitle: videoTitle,
				id: id
			})
		})
		courseData.push(chapterData);
	})
	
	return courseData;
}

function printCourseInfo(courseData) {
	courseData.forEach(function (item) {
		var chapterTitle=item.chapterTitle;
		console.log(chapterTitle.trim()+'\n');
		item.videos.forEach(function (video) {
			console.log(' 【'+video.id.trim()+'】'+video.videoTitle.trim()+'\n')
		})
	})
	
}
http.get(url,function (res) {
	var html="";

	res.on("data",function (data) {
		html+=data;
	});

	res.on("end",function () {
		var courseData=filterChapters(html);

		printCourseInfo(courseData);
	});
}).on('error',function () {
	console.log("爬虫获取数据出错！");
});



