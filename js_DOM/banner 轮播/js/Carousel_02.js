 function Carousel(width, height, imgSrcArr) {
   this.gallery = document.querySelector(".gallery");
   this.width = width;
   this.height = height;
   this.imgNum = imgSrcArr.length;
   this.imgSrcArr = imgSrcArr;
   this.position = { x: 0 };
   this.imgIndex = 1;
   this.moveBoolean = true;
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
   },
   update: function() {
     if (this.position.x == this.width + 2) {
       this.position.x = 0;
       this.moveBoolean = false;
     }
     if (this.moveBoolean) {
       this.position.x += 2;
       gallery.style.left = -this.position.x + "px";
     }
   },
   autoPlay: function() {
     setInterval(function(args) {
        // 打开开关
       this.moveBoolean = true;

       //改变图片索引
       this.imgIndex--;
       for (let i = 0; i < this.showImgArr.length; i++) {
         this.imgIndex++;
         if (this.imgIndex == this.imgSrcArr.length) {
           this.imgIndex = 0
         }
         this.showImgArr[i].src = this.imgSrcArr[this.imgIndex];
       }

     }.bind(this), 3000);

   }

 }