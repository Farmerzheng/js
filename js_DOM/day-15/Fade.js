/*
  对象需要什么，我们就添加什么

   Fade  
   param:
     oImg : 必选 ，要淡入淡出的图片对象
     speed ： 可选 ，Number , 图片淡入淡出的速度

*/
function Fade(oImg, speed) {
  // 默认速度值是5
  this.speed = speed || 5;
  // 将传入的参数作为对象的属性
  this.img = oImg;
  // 需要一个属性控制 opacity 的值
  this.opacity = 1;
  // 需要一个属性来控制动画的开始和结束（开关按钮）
  this.mouseoverBoolean = false;
}

// 构造函数的方法写在原型对象上面
Fade.prototype = {
  //对象的初始化方法
  init: function() {
    // 初始化的时候挂接事件
    this.bindEvent();
  },
  bindEvent: function() {
    // 挂接事件处理函数
    this.img.addEventListener("mouseover", this.mouseoverHandler.bind(this));
    this.img.addEventListener("mouseout", this.mouseoutHandler.bind(this));
  },
  mouseoverHandler: function() {
    this.mouseoverBoolean = true;
  },
  mouseoutHandler: function() {
    this.mouseoverBoolean = false;
  },
  update: function() {
    // 让opacity变量缓慢的变化
    if (this.mouseoverBoolean && this.opacity >= 0) {
      // 鼠标移入
      this.opacity -= this.speed / 100;
    }
    if (!this.mouseoverBoolean && this.opacity < 1) {
      //鼠标移出
      this.opacity += this.speed / 100;
    }
    // 渲染（将数据的变化反映到页面上）
    this.img.style.opacity = this.opacity;
  }
}