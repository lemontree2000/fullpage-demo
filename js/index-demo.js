/**
 * jq ready
 */
$(function() {
  $('#app').fullpage({
    'verticalCentered': false, // 是否垂直居中
    'controlArrows': false, // 是否显示selide左右箭头
    'sectionsColor': ['red', 'blue', 'yellow', 'indigo'], // 定义section 颜色
    'css': true, // 是否开启css3 动画， false为dom动画
    'navigation': true, // 是否显示导航点
    // 'navigationColor': '#000',
    'navigationTooltips': ['one', 'two', 'three', 'four'], // 定义 导航点文案
    'scrollingSpeed': 600, // 定义滚动式的速度
    // 'autoScrolling': false, // 是否显示浏览器自带滚动条 
    // 'loopBottom': true,  // 底部之后是否回到顶部 带动画
    // 'loopTop': true, // 顶部之后是否回到底部 带动画
    // 'continuousVertical': false, // 是否回到顶部或者底部 ，不带动画
    // 'continuousVertical': false, // 是否回到顶部或者底部 ，不带动画
    // 'continuousVertical': false, // 是否回到顶部或者底部 ，不带动画
    'loopHorizontal': false, // 左右滑块是否循环
    'continuousVertical': false,
    'scrollOverflow': true // 超出内容是否显示滚动条
  });

});