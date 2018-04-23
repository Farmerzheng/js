//创造一个对象
// 对象的功能是下载所有的图片，并在下载完成后通知外界

/**
 * 图片预加载
 * @param {Array} imgArr 
 * imgArr 外界传过来的图片链接数组
 * @param {Function} callback 
 * 所有图片下载完成后执行的回调函数
 */
function PreLoad(imgSrcArr, callback) {
    this.imgSrcArr = imgSrcArr;
    this.callback = callback;
    //    下载图片的个数
    this.imgNum = this.imgSrcArr.length;
    this.imgIndex = 0;
}
PreLoad.prototype = {
    init: function() {
        // 下载图片
        this.load();
    },
    load: function() {
        // 所有图片下载完成就通知外界
        if (this.imgIndex == this.imgNum) {
            this.callback();
            return;
        }
        // 创建一张图片
        let img = new Image();

        img.src = this.imgSrcArr[this.imgIndex];

        img.addEventListener('load', this.loadImgHandler.bind(this));
    },
    loadImgHandler: function() {
        this.imgIndex++;
        // 下载第二张图片
        this.load(); //递归
    }
}