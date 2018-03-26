
/*
  imgArr : Array 
  speed: 速度
*/
function Fade(imgArr,speed) {
  // 将传入的参数作为对象的属性
  this.imgArr = imgArr;
  this.speed = speed || 5;
}
Fade.prototype = {
  init: function() {
    // 创建数组，存放fade对象
    let fadeArr = [];    
    for (let i = 0; i < this.imgArr.length; i++) {
      //为每一个图片对象建立fade对象 
      let fade = new SingleFade(this.imgArr[i],this.speed);
      fade.init();
      fadeArr.push(fade)
    }
    this.fadeArr = fadeArr;
  },
  update:function(){
    // 为 fadeArr 中的每一个对象 update
    for(let i = 0 ; i < this.fadeArr.length ; i++){
      this.fadeArr[i].update();
    }
  }
}

function SingleFade(oImg,speed) {
  // 将传入的参数作为对象的属性
  this.img = oImg;
  this.opacity = 1;
  this.mouseoverBoolean = false;
  this.speed = speed;
}

SingleFade.prototype = {
  init: function() {
    this.bindEvent();
  },
  bindEvent: function() {
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
      this.opacity -= this.speed/100
    }

    if (!this.mouseoverBoolean && this.opacity < 1) {
      //鼠标移出
      this.opacity += this.speed/100
    }
    this.img.style.opacity = this.opacity;
  }
}