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
    'anchors': ['page1','page2','page3','page4'],
    'afterLoad': function(link,index) {
      console.log('加载后',link, index);
      switch(index) {
        case 1:
          $('.section1 h1').css({
            'transform': 'scale(1.5)',
            'transition': '0.4s'
          })
          $('.section1 p').css({
            'margin-left': '0',
            'transition': '0.6s'
          }).css('transform','rotate(-360deg)');
          // animate({
          //   'scale': 1.5
          // }, "slow");;
          break;
        case 2:
          $('.section2 h1').css({
            'transform': 'rotate(-360deg)',
            'transition': '0.4s'
          })          
          break;
        case 3:
          $('.section3 h1').css({
            'margin-right': '0',
            'transition': '0.4s'
          })
          $('.section3 p').css({
            'margin-left': '0',
            'transition': '0.4s'
          })
          break;
        case 4:
          $('.column img.primary').animate({
            'scale': 1.5  
          }, 'fast', function(){
            $(this).css({
              'transition': '0.3s',
              'transform': 'rotate(360deg)'
            });
            $('.column img.primary').animate({
              'scale': 1.5
            }, 'fast', function() {
              
            });
          });
          break;
      }
    },
    'onleave': function(index, nextIndex, direction) {
      console.log('滚动前', index);  
    },
    'afterRender': function() {
      console.log('页面结构生成后');  
    }
    
  });

});