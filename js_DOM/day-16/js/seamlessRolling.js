  /*
    封装的目的？ 让别人用起来方便

    param
    seamless_rolling:画廊最外面的大盒子（DOM对象）
    imgSrcArr : 图片链接的数组
    imgWidth : 单张图片的宽度
  */


  function SeamlessRolling(seamless_rolling, imgSrcArr, imgWidth, speed) {
    // 将参数作为对象的属性
    this.seamless_rolling = seamless_rolling;
    this.imgSrcArr = imgSrcArr;
    this.imgWidth = imgWidth;
    this.galleryWidth = imgWidth * imgSrcArr.length * 2;
    this.pauseBoolean = false;
    this.speed = speed;
  }
  SeamlessRolling.prototype = {
    init: function() {
      // 创建盒子当中的内容
      this.creatContent();
      this.bindEvent();
    },
    creatContent: function() {
      // gallery
      let gallery = document.createElement("ul");
      this.gallery = gallery;
      gallery.style.cssText = "width:" + this.galleryWidth + "px;height:100%;position:absolute;left:0; top:0"

      this.seamless_rolling.appendChild(gallery);
      // 放入2倍的图片总数
      this.appendLiAImg();
      this.appendLiAImg();
    },
    appendLiAImg: function() {
      // 循环创建 li a img (2倍) 并添加到 gallery
      for (let i = 0; i < this.imgSrcArr.length; i++) {
        // gallery_item
        let gallery_item = document.createElement("li");
        // console.log(this.imgWidth)
        gallery_item.style.cssText = "  width:" + this.imgWidth + "px; height: 100%;float: left;";
        // gallery_link
        let gallery_link = document.createElement("a");
        gallery_link.style.cssText = "  display: block; height: 100%; width: 100%;";
        // img
        let img = document.createElement("img");
        img.style.cssText = "  width: 100%; height: 100%;";

        // 为图片对象添加链接
        img.src = this.imgSrcArr[i];

        gallery_link.appendChild(img);
        gallery_item.appendChild(gallery_link);
        this.gallery.appendChild(gallery_item)
      }
    },
    update: function() {
      if (this.pauseBoolean) return;
      if (this.gallery.offsetLeft === -this.gallery.offsetWidth / 2) {
        this.gallery.style.left = 0;
      }
      this.gallery.style.left = this.gallery.offsetLeft - this.speed + "px";
    },
    bindEvent: function() {
      this.seamless_rolling.addEventListener("mouseover", this.mouseoverHandler.bind(this))
      this.seamless_rolling.addEventListener("mouseout", this.mouseoutHandler.bind(this))
    },
    mouseoverHandler: function() {
      this.pauseBoolean = true;
    },
    mouseoutHandler: function() {
      this.pauseBoolean = false;
    }
  }


  /* // 两种方式可以获取到gallery
  let gallery = document.querySelector(".gallery");
  // let gallery = document.getElementsByClassName("gallery")[0];
  let seamless_rolling = document.querySelector(".seamless_rolling");

  let pauseBoolean = false;


  let speed = 2;

  // let a = "5px"
  // console.log(parseInt(a));
   
  seamless_rolling.addEventListener("mouseover",mouseoverHandler);
  seamless_rolling.addEventListener("mouseout",mouseoutHandler);

  function  mouseoverHandler(){
    pauseBoolean = true;
  }
  function mouseoutHandler(){
   pauseBoolean = false;
  }

  function update(){  
    if(pauseBoolean)return;
    if(gallery.offsetLeft === -gallery.offsetWidth/2){
       gallery.style.left = 0;
    }
    gallery.style.left = gallery.offsetLeft - speed + "px";
  }
*/