// 获取canvas元素
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 设置圆的属性
const centerX = canvas.width / 2; // 圆心的x坐标
const centerY = canvas.height / 2; // 圆心的y坐标
const radius = 175; // 圆的半径
const startAngle = 2 * Math.PI - Math.PI / 2; // 起始角度（以弧度为单位）
const endAngle = 2 * Math.PI; // 结束角度（以弧度为单位）
const counterClockwise = false; // 是否逆时针绘制
const rotationAngle = Math.PI / 3; // 旋转角度（以弧度为单位）



// 获取按钮
var button = document.getElementsByTagName("button");

button[0].onclick = function () {

    // 定义一个随机数，随机数的范围是0到360
    let sum = Math.random() * 360;

    for (let index = 0; index < sum; index++) {
        // 旋转



        setTimeout(() => {
            // 清空画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // 保存当前的绘图状态
            ctx.save();

            // 平移到圆心
            ctx.translate(centerX, centerY);

            ctx.rotate(rotationAngle)

            // 平移回原点
            ctx.translate(-centerX, -centerY);

            // 绘制扇形
            setTimeout(ctx.beginPath(), 10000);
            ctx.moveTo(centerX, centerY); // 移动到圆心

            ctx.arc(centerX, centerY, radius, startAngle, endAngle, counterClockwise); // 绘制弧线
            ctx.lineTo(centerX, centerY); // 从弧线的终点回到圆心
            ctx.closePath(); // 封闭路径

            ctx.lineWidth = 5; // 设置线宽
            ctx.strokeStyle = 'blue'; // 设置边框颜色
            ctx.fillStyle = 'red'; // 设置填充颜色
            ctx.fill(); // 填充扇形
            ctx.stroke(); // 绘制边框
        }, index * 10);
    }





    // 恢复之前的绘图状态
    ctx.restore();


}
