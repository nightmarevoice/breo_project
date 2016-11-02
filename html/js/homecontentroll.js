var homecontentrollModule = (
  function(){
    requestAjax({
        url:"../../php/code/homecontentroll.php"
    },function(str){
        var obj = JSON.parse(str)
        var arr = [];
        for(var i = 0; i < obj.length ; i++){
            arr.unshift(obj[i])
        }
        arr.push(arr[0]);
        arr.unshift(arr[arr.length -2]);
        console.log(arr);
        $(document).ready(function(){
            roll(arr)
        })

        move();
    })
    function roll(arr){
        var rolltu = $("#rolltu");
        rolltu.children("ul").css({
            top: -rolltu.height(),
        })
        for(var i = 0; i < arr.length; i ++){
            var li = $("<li/>");
            rolltu.children("ul").append(li);
            var a = $("<a/>");
            a.attr("href","news_details.html?news_id="+arr[i].news_id);
            li.append(a);
            var img = $("<img/>");
            a.append(img);
            img.attr("src","../img/newsImg/"+arr[i].news_img);
        }
    }
    // 添加点击事件；
    function move(){

        var rollUp = $(".rollUp");
        var rollDown = $(".rollDown");
        rollUp.on("click",function(){
            var off = $("#rolltu").children("ul").position().top;
            off -= $("#rolltu").height();
            $("#rolltu").children("ul").animate({
                top:off,
            },500,function(){
                if(off <= -($("#rolltu").children("ul").height()-$("#rolltu").height())){
                    $("#rolltu").children("ul").css({
                        top: - $("#rolltu").height(),
                    })
                }
            })
        })
        rollDown.on("click",function(){
            var off = $("#rolltu").children("ul").position().top;
            off += $("#rolltu").height();
            $("#rolltu").children("ul").animate({
                top:off,
            },500,function(){
                if(off >= 0){
                    $("#rolltu").children("ul").css({
                        top: -($("#rolltu").children("ul").height() - 2*$("#rolltu").height()),
                    })
                    console.log()
                }
            })
        })

    }

  }
)()
