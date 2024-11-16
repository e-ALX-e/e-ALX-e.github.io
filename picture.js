// 获取按钮
var button = document.getElementsByTagName("button");
// 遍历所有按钮
for (var i = 0; i < button.length - 1; i++) {
  // 为每个按钮添加点击事件
  button[i].onclick = function () {
    // 获取当前点击的按钮
    var button = this;
    // 获取当前点击的按钮的样式
    var style = button.style;
    if (style.backgroundColor == "") {
      // 如果没有设置背景颜色，则设置背景颜色为红色
      style.backgroundColor = "#0300cc75";
    }
    else {
      // 如果设置了背景颜色，则设置背景颜色为空
      style.backgroundColor = "";
    }

  }
}
button[4].onclick = function () {
  var a = prompt("请输入");

  console.log(`输入的类型是${typeof a}`);
  console.log(`${a}牛逼`);

}






