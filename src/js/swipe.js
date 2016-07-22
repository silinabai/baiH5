/**
 * Created by huoqiu on 16/7/22.
 */

function Swipe(container){
    // 获取第一个子节点
    var element = container.find(":first");
    // li页面数量
    var slides = element.find("li");
    // 获取容器尺寸
    var width = container.width();
    var height = container.height();
    // 设置li页面总宽度
    element.css({
        width  : (slides.length * width) + 'px',
        height : height + 'px'
    });
    // 设置每一个页面li的宽度
    slides.each(function(index){
        var slide = slides.eq(index);
        slide.css({
            width:width+'px',
            height:height+'px'
        });
    });
    // $(".btn1").on("click",function(){
    //     element.css({
    //     'transition-timing-function':  'linear',
    //     'transition-duration': '5000ms',
    //     //2d展示
    //     'transform':'translate(-'+width*2+'px'+','+0+'px)'
    //     //3d展示
    //     // 'transform': 'translate3d(-' + (width * 2) + 'px,0px,0px)' //设置页面X轴移动
    // });

    // }) ;
//监控完成与移动
    var swipe={};
    swipe.scrollTo = function(x, speed) {
        //执行动画移动
        element.css({
            'transition-timing-function' : 'linear',
            'transition-duration'        : speed + 'ms',
            'transform'                  : 'translate3d(-' + x + 'px,0px,0px)'
        });
        return this;
    };

    return swipe;

}

// $.each(slides, function(index) {
//     var slide = slides.eq(index); //获取到每一个li元素
//     slider.css({
//       width:width+'px',
//       height:height+'px'
//     });
// });



