var rolling = (
function(){
    var arr = null;
    var n = 0;
    var timer = null;
    var rollImg = $(".rollImg");
    rollImg.css({
        height:$(".rollImg").width()*873/1905,
    })
    requestAjax({
        url:"../../php/code/homeroll.php",
    },function(str){
        var obj = JSON.parse(str);
        arr = obj;
        createUL(arr);
    })
    function createUL(arr){
        // ul放置图片
        var ul = $("<ul/>");
        ul.addClass("myUl");
        rollImg.append(ul);
        ul.css({
            width:rollImg.width(),
            position:"relative",
        });
        // roundUl放置圆点；
        var roundul = $("<ul/>");
        rollImg.append(roundul);
        roundul.css({
            height:"12px",
            margin:"0 auto",
            position:"absolute",
            left:"calc(50% - 20px)",
            bottom:"10px"
        })
        for(var i = 0; i < arr.length; i++){
            var li = $("<li/>");
            ul.append(li);
            li.addClass("myLi")
            li.css({
                position:"absolute",
            });
            var a = $("<a/>");
            li.append(a);
            a.attr("href","")
            var img = $("<img/>");
            a.append(img);
            img.addClass("myImg");
            img.attr("src","../img/home/"+arr[arr.length-1-i].product_img);
            // 生成round
            var roundli = $("<li/>");
            roundul.append(roundli);
            roundli.addClass("roundli")
            roundli.css({
                float:"left",
                height:"12px",
                width:"12px",
                marginLeft:"3px",
                background:"url(../img/home/dian_03.png)no-repeat left top",
            })
         };
         // 添加左右按钮；
         function button(rollImg){
            var buttonLeft = $("<div/>");
            var buttonRight = $("<div/>");
            rollImg.append(buttonLeft);
            rollImg.append(buttonRight);
            buttonLeft.css({
                width:"30px",
                height:"102px",
                position:"absolute",
                background:"url(../img/home/left_03.png)no-repeat left top",
                left:"20px",
                top:"calc(50% - 50px)",
                cursor:'pointer',
            });
            buttonRight.css({
                width:"30px",
                height:"102px",
                position:"absolute",
                background:"url(../img/home/right_03.png)no-repeat left top",
                right:"20px",
                top:"calc(50% - 50px)",
                cursor:"pointer",
            });
            // 添加点击事件
            buttonLeft.on("click",function(){
                clearInterval(timer);
                n--;
                if(n <=-1){
                    n = arr.length-1;
                };
                var roundli = $(".roundli");
                show(n,roundli);
            })
            buttonRight.on("click",function(){
                clearInterval(timer);
                n++;
                if(n >= arr.length){
                    n = 0;
                };
                var roundli = $(".roundli");
                show(n,roundli);
            });
        }
        button(rollImg);
        move(rollImg)
    }

    // 改变图片透明度达到切换效果
    function move(rollImg){
        var roundli = $(".roundli");
        timer = setInterval(function(){
            n++;
            if(n == arr.length){
                n = 0;
            }
            show(n,roundli);
        },2000);
    }
    // 显示隐藏函数
    function show(n,roundli){
        setTimeout(function(){
            $(".myLi").css({
                display:"none",
            })
            $($(".myLi")[n]).css({
                display:"block",
            })
            roundli.css({
                background:"url(../img/home/dian_03.png)no-repeat left top"
            })
            $(roundli[n]).css({
                background:"url(../img/home/dian2_03.png)no-repeat left top"
            })
        },100);
    }
    // 浏览器改变尺寸相关调整尺寸大小
    window.onresize = function(){
      $(".rollImg").css({
        height:$(".rollImg").width()*873/1905,
      });
      $(".myImg").css({
        width:$(".rollImg").width(),
      });
      $(".myUl").css({
        height:$(".rollImg").width()*873/1905,
      })
    }
}
)()
