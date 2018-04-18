function Drag(moveBox) {
    this.moveBox = moveBox;
    this.moveBoolean = false;
    this.closeBtn = moveBox.querySelector(".close");
}
Drag.prototype = {
    init: function() {
        this.bindEvent();
    },
    bindEvent: function() {

        document.addEventListener("mousemove", this.mousemoveHandler.bind(this));

        this.moveBox.addEventListener("mousedown", this.mousedownHandler.bind(this));

        document.addEventListener("mouseup", this.mouseupHandler.bind(this));
        this.closeBtn.addEventListener("click", this.closeHandler.bind(this))
    },
    // 鼠标按下就会触发这个函数
    mousedownHandler: function(e) {
        // 全局的 zindex;
        zIndex++;
        this.moveBoolean = true;



        this.moveBox.style.zIndex = zIndex;

        console.log(this.moveBox.parentNode.children)


        // 计算出鼠标在盒子当中的位置
        this.divX = e.pageX - this.moveBox.offsetLeft;
        this.divY = e.pageY - this.moveBox.offsetTop;
    },
    mousemoveHandler: function(e) {

        if (this.moveBoolean) {
            // 动态改变盒子的位置
            this.moveBox.style.left = e.pageX - this.divX + "px";
            this.moveBox.style.top = e.pageY - this.divY + "px";
        }

    },

    mouseupHandler: function() {
        this.moveBoolean = false;
    },
    closeHandler: function() {
        this.moveBox.remove();
    }

}