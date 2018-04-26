var Move = {
    init: function(obj) {

        /*
          面向过程开发
          c : 距离的增量
          b : 初始的位置
          d : 终止时刻
          t : 开始时刻
        */
        // 要移动的盒子
        this.box = obj.box;
        // 开始时刻
        this.t = 0;
        // 初始位置
        this.b = obj.start;
        // 距离的增量
        this.c = obj.iTarget - obj.start;

        // this.speed 运动的总时间
        // 运动的总时间和速度成反比
        this.d = 100 / obj.speed;

        // 运动的曲线函数
        this.animate = obj.animate;

        this.callback = obj.callback;

        this.updateBoolean = true;

        // return this;
    },
    update: function() {

        if (!this.updateBoolean) return;

        // 时间增加
        this.t += 0.1;


        // 获取某个具体时刻盒子的位置
        // eval(字符串) 字符串会执行
        let s = eval(this.animate + "(this.t, this.b, this.c, this.d)");

        // 渲染盒子
        this.box.style.left = s + "px";

        // 如果到达终止时间就停止
        if (this.t >= this.d) {
            this.updateBoolean = false;
            this.callback();
        }
    }
}

//   Move.init({
//     box:box,  运动的盒子
//     start:200, 初始位置
//     iTarget:500, 终止位置
//     speed:10, 运动的速度
//     animate:"Tween.Bounce.easeOut" 运动的曲线
//    })

// Move 对象的使用？
//   第一步 ：Move.init();
//   第二步 ：Move.update();