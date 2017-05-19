/**
 * jq ready
 */
$(function() {
  $('#app').fullpage({
    'verticalCentered': false, // 是否垂直居中
    'controlArrows': false, // 是否显示selide左右箭头
    'css': true, // 是否开启css3 动画， false为dom动画
    'navigation': true, // 是否显示导航点
    'navigationTooltips': ['one', 'two', 'three', 'four'], // 定义 导航点文案
    'loopBottom': true,  // 底部之后是否回到顶部 带动画
    'loopHorizontal': false, // 左右滑块是否循环
  });

});