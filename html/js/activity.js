var activityModule =(
  function(){
    var activity = ["<div class=\"actImg\">",
"              <a href=\"#\">",
"                <img src=\"../img/shop/201609121515455481.jpg\" alt=\"\" />",
"              </a>",
"            </div>",
"            <div class=\"actind\">",
"              <a href=\"#\">运气来了挡不住 微信支付最高立减50元！</a>",
"              <p>",
"                全国门店",
"              </p>",
"              <p>",
"                9.9-10.10",
"              </p>",
"              <p>",
"                100%随机立减 最高可免50元",
"              </p>",
"            </div>",
"            <div class=\"actjr\">",
"              <a href=\"#\">点击进入</a>",
"            </div>"].join("");
    requestAjax({
      url:"../../php/code/activity.php"
    },function(str){
        var obj = JSON.parse(str);
        var actUl = $(".actUl");
        for(var i = 0 ; i < obj.length; i++){
          var li = $("<li/>");
          actUl.append(li);
          li[0].innerHTML = activity;
          li.find("a").attr("href","activitydetail.html?activity_id="+obj[i].activity_id);
          li.children(".actImg").find("img").attr("src","../img/shop/"+obj[i].activity_img);
          li.children(".actind").find("a").text(obj[i].activity_title);
          $(li.children(".actind").find("p")[0]).text(obj[i].activity_men);
          $(li.children(".actind").find("p")[1]).text(obj[i].activity_date);
          $(li.children(".actind").find("p")[2]).text(obj[i].activity_introduct);
        }
    })
  }
)()
