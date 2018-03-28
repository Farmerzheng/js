 function Carousel(width, height, imgSrcArr) {
   this.gallery = document.querySelector(".gallery");
   this.width = width;
   this.height = height;
   this.imgNum = imgSrcArr.length;
   this.imgSrcArr = imgSrcArr;
   this.position = { x: 0 };
   this.imgIndex = 1;
   this.moveBoolean = true;
   this.speed = 6;
   this.directLeft = true;
 }
 Carousel.prototype = {
   init: function() {
     for (let i = 0; i < 2; i++) {
       let li = document.createElement("li");
       li.style.width = this.width + "px";
       li.style.height = this.height + "px";
       li.style.float = "left";
       let img = document.createElement("img");
       img.src = this.imgSrcArr[i];
       img.style.height = "100%";
       img.style.width = this.width + "px";
       li.appendChild(img);
       gallery.style.width = this.width * 100 + "px";
       gallery.style.height = this.height + "px";
       gallery.style.position = "absolute";
       gallery.appendChild(li);
     }
     this.showImgArr = gallery.querySelectorAll("img");
     this.autoPlay();
     this.bindEvent();
   },
   bindEvent: function() {
     carouselWrap.addEventListener("mouseover", this.mouseoverHandler.bind(this));
     carouselWrap.addEventListener("mouseout", this.mouseoutHandler.bind(this));
     leftBtn.addEventListener("click", this.leftClickHandler.bind(this));
     rightBtn.addEventListener("click", this.rightClickHandler.bind(this));
   },
   update: function() {


     if (this.moveBoolean && this.directLeft) { //左移动

       this.position.x += this.speed;

       gallery.style.left = -this.position.x + "px";

       if (this.position.x == this.width) {
         this.position.x = 0;
         this.moveBoolean = false;
       }
     }

     if (this.moveBoolean && !this.directLeft) { //右移动

       this.position.x += this.speed;
       console.log(this.position.x)

       gallery.style.left = this.position.x + "px";

       if (this.position.x == 0) {
         this.position.x = -this.width;
         this.moveBoolean = false;
       }
     }
   },
   autoPlay: function() {
     this.timer = setInterval(function(args) {
       // 打开开关
       this.moveBoolean = true;
       this.directLeft = true;

       this.changeImg();

     }.bind(this), 3000);
   },
   changeImg: function() {
     //左移动---改变图片索引

     if (this.directLeft) {
       this.imgIndex--;
     } else {
       this.imgIndex++;  

     for (let i = 0; i < this.showImgArr.length; i++) {

       if (this.directLeft) {
         this.imgIndex++;
       } else {
         this.imgIndex--;
       }

       if (this.imgIndex == this.imgSrcArr.length) {
         this.imgIndex = 0
       }
       this.showImgArr[i].src = this.imgSrcArr[this.imgIndex];
     }
     //右移动----改变图片索引

     // for (let i = 0; i < this.showImgArr.length; i++) {
     //   this.imgIndex--;
     //   if (this.imgIndex == this.imgSrcArr.length) {
     //     this.imgIndex = 0
     //   }
     //   this.showImgArr[i].src = this.imgSrcArr[this.imgIndex];
     // }
   },
   mouseoverHandler: function() {
     clearInterval(this.timer);
   },
   mouseoutHandler: function() {
     this.autoPlay();
   },
   leftClickHandler: function() {

     // 打开开关
     this.moveBoolean = true;
     this.directLeft = true;
     // 改变图片
     if (this.position.x == 0) {
       this.changeImg();
     }


   },
   rightClickHandler: function() {

     this.position.x = -this.width
     // gallery.style.left = this.position.x + "px";

     // 打开开关
     this.moveBoolean = true;
     this.directLeft = false;


     // 改变图片
     // if (this.position.x == 0) {
       this.changeImg();
     // }
   }


 }