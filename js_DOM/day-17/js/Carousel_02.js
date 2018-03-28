function Carousel(gallery, speed, leftBtn, rightBtn, imgSrcArr) {
  this.gallery = gallery;
  this.speed = speed;
  this.leftBtn = leftBtn;
  this.rightBtn = rightBtn;
  // 需要开关，来判断是左移动还是右移动
  this.directLeft = true;

  // 让图片作为自身的属性
  // 得到某个DOM 对象下面的元素  DOM.querySelector("选择器")
  this.imgArr = this.gallery.querySelectorAll(".img");


  // 所有图片的链接地址
  this.imgSrcArr = imgSrcArr;

  //新增图片的索引 
  this.imgIndex = 0;
}
Carousel.prototype = {
  init: function() {
    this.bindEvent();
    // 初始化的时候需要自动播放
    this.autoPlay();
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
  autoPlay: function() {
    setInterval(function(args) {
      // setInterval 中的this 指 window
      this.directLeft = true;
    }.bind(this), 3000)
  },
  update: function() {
    // this.gallery 自左向右移动
    if (this.directLeft) { //只有左侧开关打开的时候，才从左至右移动
      this.gallery.style.left = this.gallery.offsetLeft - this.speed + "px";
      // 当移动完一张图片后就停止移动
      if (this.gallery.offsetLeft == -this.gallery.offsetWidth / 2) {
        // 关闭开关--->图片不动了---->改变图片索引、将gallery拉回去
        this.directLeft = false;

        // 改变图片索引
        this.changeImg();

        // 将gallery拉回去
        this.pullBack();
      }
    }
    // this.gallery 自右向左移动
  },
  // 需要什么功能就写什么方法
  // 换图片是一个复杂的逻辑，所以我们为对象增加了changeImg防法
  changeImg: function() {

    /* 改变图片---->拿到图片、所有的图片链接数组、图片链接的索引（0,1-->1,2-->2,3--->3,0-->0,1）
     */

    // 左移动（改变 this.imgIndex）
    // 左移动什么时候改变图片索引-----> 当图片停止移动的时候  ---->图片停止移动的时候 this.directLeft === false
    if (!this.directLeft) {


      // 渲染（将数据变化反应到页面上）
      for (let i = 0; i < this.imgArr.length; i++) {
        // 图片索引增加
        this.imgIndex++;
        // 改变图片
        // this.imgArr : 获取到的两个图片对象（放在了数组里面）
        // 图片对象有一个 src 属性，属性的值是图片的链接地址
        // this.imgSrcArr 数组里面粗放着图片的链接地址
        // this.imgIndex 初始值是0 第一次循环值变成了1  第二次变成了2
        // 通过循环我们得到了this.imgSrcArr中的第二和第三个图片的链接地址


        if (this.imgIndex == this.imgSrcArr.length) {
          this.imgIndex = 0;
        }

        this.imgArr[i].src = this.imgSrcArr[this.imgIndex]
      }
      this.imgIndex--;



      // 经过第一次循环以后this.imgIndex == 2
      // 第二次再改变图片的时候 我们希望this.imgIndex == 1


    }
    // 右移动（改变 this.imgIndex） 
    if (!this.directLeft) {

    }

    // this.imgIndex -----> this.imgSrcArr[this.imgIndex]
  },
  pullBack: function() {

    if (this.directLeft) {

    }

    if (!this.directLeft) {
      //将gallery 的left值变成 0
      this.gallery.style.left = "0px";
    }
  }
}