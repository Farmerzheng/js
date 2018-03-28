 function Carousel(width, height, imgNum, imgSrcArr) {
   this.gallery = document.querySelector(".gallery");
   this.width = width;
   this.height = height;
   this.imgNum = imgNum;
   this.imgSrcArr = imgSrcArr;
   this.position = { x: 0 };
   this.imgIndex = 1;
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
     this.tweenInit();
     this.autoPlay();
   },
   tweenInit: function() {
     this.tween = new TWEEN.Tween(this.position)
       .to({ x: this.width }, 2000)
       .delay(1000)
       .easing(TWEEN.Easing.Quadratic.InOut) 
       .onUpdate(this.update)
       .repeat(100);
        

     this.tween.start();
   },
   update: function() {
     console.log(this);
     gallery.style.left = -this.x + "px";

   },
   autoPlay: function() {

     setInterval(function(args) {
       // 重置gallery位置
       gallery.style.left = 0 + "px";

       // 让gallery重新运动
       // this.tween.repeat(12);

       //改变图片索引
       this.imgIndex--;
       for (let i = 0; i < this.showImgArr.length; i++) {
         this.imgIndex++;
         if (this.imgIndex == 4) {
           this.imgIndex = 0
         }
         this.showImgArr[i].src = this.imgSrcArr[this.imgIndex];
       }

     }.bind(this), 3000);

   }

 }