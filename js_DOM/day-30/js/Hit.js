let Hit = {
    // 判断两个矩形是否相撞
    testRect: function(testA, testB) {
        let rectA = testA.getBoundingClientRect();
        let rectB = testB.getBoundingClientRect();

        //   左上角
        if (rectA.left < rectB.left && rectA.right > rectB.left && rectA.top < rectB.top && rectA.bottom > rectB.top) {
            return true;
        }
        //右上角
        if (rectA.left < rectB.right && rectA.right > rectB.right && rectA.top < rectB.top && rectA.bottom > rectB.top) {
            return true;
        }

        // 左下角

        if (rectA.left < rectB.left && rectA.right > rectB.left && rectA.top < rectB.bottom && rectA.bottom > rectB.bottom) {
            return true;
        }

        // 右下角

        if (rectA.left < rectB.right && rectA.right > rectB.right && rectA.top < rectB.bottom && rectA.bottom > rectB.bottom) {
            return true;
        }

        return false;

    },
    // 判断两个圆形是否相撞
    testCircle: function(circleA, circleB) {
        let rectA = circleA.getBoundingClientRect();
        let rectB = circleB.getBoundingClientRect();

        // 圆心的距离
        //   let distance = Math.sqrt(Math.pow(,2)+Math.pow(,2));

        //    circleA 的圆心坐标

        let a = Math.sqrt(Math.pow(rectA.top + rectA.width / 2, 2) + Math.pow(rectA.left + rectA.width / 2, 2));

        let b = Math.sqrt(Math.pow(rectB.top + rectB.width / 2, 2) + Math.pow(rectB.left + rectB.width / 2, 2));

        // 两个圆的圆心之间的距离

        let distance = Math.sqrt(Math.pow((rectA.top + rectA.width / 2) - (rectB.top + rectB.width / 2), 2) + Math.pow((rectA.left + rectA.width / 2) - (rectB.left + rectB.width / 2), 2))

        if (distance < (rectA.width / 2 + rectB.width / 2)) {
            return true;
        } else {
            return false;
        }

    }
}