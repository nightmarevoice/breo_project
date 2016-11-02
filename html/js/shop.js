var shopModule = (
  function(){
    var arr = ["<div class=\"shopdetailImg\">",
"              <a href=\"#\"><img src=\"../img/shop/201609221352513676.png\" alt=\"\" /></a>",
"            </div>",
"            <div class=\"shopdec\">",
"              <a href=\"#\">虹桥机场T2 17店</a>",
"              <img src=\"../img/shop/level_5.png\" alt=\"\" />",
"              <p class=\"dz\">",
"                长宁区虹桥路2550号虹桥机场T2航站楼25号",
"              </p>",
"              <p class=\"dh\">",
"                400-030-9733",
"              </p>",
"            </div>"].join("");
    requestAjax({
      url:"../../php/code/shop.php",
    },function(str){
        var obj = JSON.parse(str);
        var myul = $(".shopaddress").children("ul");
        for(var i = 0; i < obj.length; i++){
          var li = $("<li/>");
          li[0].data = obj[i];
          myul.append(li);
          li[0].innerHTML = arr;
          // 将数据添加到li中；
          add(li);
        }
    })
    // 添加数据函数add;参数i为添加第几个数据 obj 为返回的数据经json解析；
    function add(li){
      // 使用jq添加；
      li.children(".shopdetailImg").find("img").attr("src","../img/shop/"+li[0].data.shop_img)
      li.children(".shopdec").find("a").text(li[0].data.shop_name);
      li.find(".dz").text(li[0].data.shop_address);
      li.find(".dh").text(li[0].data.shop_telephone);
      li.find("a").attr("href","shopDetail.html?shop_id="+li[0].data.shop_id+"&shop_activityid="+li[0].data.shop_activityid);

    }

  }
)()
