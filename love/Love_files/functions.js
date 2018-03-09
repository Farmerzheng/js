/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
  var newWidth = $win.width();
  var newHeight = $win.height();
  if (newWidth != clientWidth && newHeight != clientHeight) {
    location.replace(location);
  }
});

(function($) {
  $.fn.typewriter = function() {
    this.each(function() {
      var $ele = $(this),
        str = $ele.html(),
        progress = 0;
      $ele.html('');
      var timer = setInterval(function() {
        var current = str.substr(progress, 1);
        if (current == '<') {
          progress = str.indexOf('>', progress) + 1;
        } else {
          progress++;
        }
        $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
        if (progress >= str.length) {
          clearInterval(timer);
        }
      }, 75);
    });
    return this;
  };
})(jQuery);

function timeElapse(date) {
  // 获取当前时间
  var current = Date();
  // console.log(current);
  // 取得从 1970/01/01 到 2017/03/19 的毫秒数
  // var d = Date.parse("2017/03/19")

  // 总的的秒数
  var seconds = (Date.parse(current) - Date.parse(date)) / 1000;

  // 总的天数
  var days = Math.floor(seconds / (3600 * 24));

  // 总的天数剩余的秒数
  seconds = seconds % (3600 * 24);

  // 总的天数剩余的小时数
  var hours = Math.floor(seconds / 3600);

  // 如果小于10小时前面加零
  if (hours < 10) {
    hours = "0" + hours;
  }

  // 总的天数剩余的小时数后面的秒数
  seconds = seconds % 3600;
   
  //  总的天数剩余的小时数后面的分钟数
  var minutes = Math.floor(seconds / 60);

  // 如果分钟数小于10前面加0
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
 
  // 总的天数剩余的小时数后面的分钟数后面的秒数
  seconds = seconds % 60;
 
  // 如果秒数小于10前面加0
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  console.log(days,hours,minutes,seconds)
  var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒";
  $("#clock").html(result);

}