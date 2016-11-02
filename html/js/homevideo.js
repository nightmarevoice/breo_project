var homevideoMoudel = (
    function(){
      requestAjax({
        url:"../../php/code/homevideo.php"
      },function(str){
          var obj = JSON.parse(str);
          addData(obj);
      });
      // 添加数据；
      function addData(obj){
          var video = $(".video");
          for(var i = 0 ; i < obj.length ; i ++){
              var li = $("<li/>");
              video.children("ul").append(li);
              var myA = $("<a/>");
              li.append(myA);
              myA.attr("href","../html/videoDetails.html?video_id="+obj[i].video_id);
              var firstImg = $("<img/>");
              myA.append(firstImg);
              firstImg.attr("src","../img/video/"+obj[i].video_img);
              var secondImg = $("<img/>");
              secondImg.hide();
              secondImg.addClass("videobc");
              secondImg.attr("src","../img/video/FFFD6841A6E3F3FA8E631CB309F99789.png");
              myA.append(secondImg);
              // 添加移入移除事件
              li.mouseover(function(){
                  $(this).find(".videobc").show();
              }).mouseout(function(){
                  $(this).find(".videobc").hide();
              })
          }
      }
    }
)()
