function Fade(imgArr) {
  // 将传入的参数作为对象的属性
  this.imgArr = imgArr;
}

Fade.prototype = {
  init: function() {
    if (this.imgArr.length) {
      let arr = [];
      for (let i = 0; i < this.imgArr.length; i++) {
        let fade = new SingFade(this.imgArr[i]);
        fade.init();
        arr.push(fade);
      }
      this.fadeArr = arr;
    } else {
      let fade = new SingFade(this.imgArr);
      fade.init();
      this.fadeArr = fade;
    }
  },
  update: function() {
    if (this.fadeArr.length) {
      for (let i = 0; i < this.fadeArr.length; i++) {
        this.fadeArr[i].update();
      }
    } else {
      this.fadeArr.update();
    }
  }
}



function SingFade(oImg) {
  this.img = oImg;
  this.opacity = 1;
  this.mouseoverBoolean = false;
}

SingFade.prototype = {
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
      this.opacity -= 0.02
    }

    if (!this.mouseoverBoolean && this.opacity < 1) {
      //鼠标移出
      this.opacity += 0.02
    }
    this.img.style.opacity = this.opacity;
  }
}