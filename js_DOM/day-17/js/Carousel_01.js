function Carousel(gallery, speed, leftBtn, rightBtn,imgSrcArr) {
  this.gallery = gallery;
  this.speed = speed;
  this.leftBtn = leftBtn;
  this.rightBtn = rightBtn;
  this.directLeft = true;
  // 让图片作为自身的属性
  // 得到某个DOM 对象下面的元素  DOM.querySelector("选择器")
  this.imgArr = this.gallery.querySelectorAll(".img");
  // console.log(this.imgArr)
  // 所有图片的链接地址
  this.imgSrcArr = imgSrcArr;
  //新增图片的索引 
  this.imgIndex = 0;
}
Carousel.prototype = {
  init: function() {
    this.bindEvent()
  },
  bindEvent: function() {
    this.leftBtn.addEventListener("click", this.leftClickHandler.bind(this))
    this.rightBtn.addEventListener("click", this.rightClickHandler.bind(this))
  },
  leftClickHandler: function() {
    this.directLeft = true;
  },
  rightClickHandler: function() {
    this.directLeft = false;
  },
  update: function() {
    // this.gallery 自左向右移动
    if (this.directLeft) {//只有左侧开关打开的时候，才从左至右移动
      this.gallery.style.left = this.gallery.offsetLeft - this.speed + "px";
      // 当移动完一张图片后就停止移动
      if (this.gallery.offsetLeft == -this.gallery.offsetWidth/2) {
      	// 关闭开关
        this.directLeft = false;
      }
    }


    // this.gallery 自右向左移动
  },
  // 需要什么功能就写什么方法
  // 换图片是一个复杂的逻辑，所以我们为对象增加了changeImg防法
  changeImg:function(){     

    // 左移动（改变 this.imgIndex）
    if(this.directLeft){
       
    }
    // 右移动（改变 this.imgIndex） 
    if(!this.directLeft){

    }

    // this.imgIndex -----> this.imgSrcArr[this.imgIndex]
  }
}