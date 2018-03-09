(function (doc, win) {
  //orientationchange : 判断手机是水平方向还是垂直方向，感应方向

  //doc ==》 document对象
  //doc.documentElement ==> 得到文档的根元素-->  <html>
  //之所以要得到文档的根元素，是为了计算网页打开时屏幕的真实宽度
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      //320 是我们默认的手机屏幕 
      //clientWidth 是我们页面打开时所得到的屏幕宽度真实的宽度值
      //这两者相除得到一个放大或缩小的比例值
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'; //1rem=clientWidth/16
      //设置根元素font-size
      // 若屏幕设计图像素是750px
      // 1px=16/750rem=0.0213rem
      // 1rem=1px/0.0213=46.875px
    };
    /*600px
    20 * 600/320  -- >  [2 -- 3] 放大范围
    200/320 -- > [0.5 -- 0.1] 缩小*/
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  //当dom加载完成时，或者 屏幕垂直、水平方向有改变进行html的根元素计算
})(document, window);
//如果你不想进行一个响应式设计的开发，你可以直接把font-size写死