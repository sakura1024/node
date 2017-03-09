// 引入 events 模块
var EventEmitter = require('events').EventEmitter;
// 创建 eventEmitter 对象
var life = new EventEmitter();

//未作限制时，同一个对象设置事件的最大额度是10，第11个也可以设置上并且执行，但是会有警告提示
life.on('cry',function(who){
	console.log(who+' cry1');
});
life.on('cry',function(who){
	console.log(who+' cry2');
});
life.on('cry',function(who){
	console.log(who+' cry3');
});
life.on('cry',function(who){
	console.log(who+' cry4');
});
life.on('cry',function(who){
	console.log(who+' cry5');
});
life.on('cry',function(who){
	console.log(who+' cry6');
});
life.on('cry',function(who){
	console.log(who+' cry7');
});
life.on('cry',function(who){
	console.log(who+' cry8');
});
life.on('cry',function(who){
	console.log(who+' cry9');
});
life.on('love',function(who){
	console.log(who+' cry10');
});
life.on('love',function(who){
	console.log(who+' cry11');
});

//判断一个事件是否被监听，被监听返回true，反之返回false
var cry=life.emit('cry','baby');
var love=life.emit('love','baby');
var laugh=life.emit('laugh','baby');

console.log(cry);
console.log(love);
console.log(laugh);
