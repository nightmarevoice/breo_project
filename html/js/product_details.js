var product_detailsModule = (

  function(){
    // 添加左侧数据
    requestAjax({
        url:"../../php/code/productLeft.php?product_classifid="+getvl("product_classifid"),
    },function(str){
        var obj = JSON.parse(str);
        var ul = $(".leftcontent").children("ul");
        var arr = ["<div class=\"productImg\"style=\"display:none;\">",
                  "<a href=\"#\">",
                  "<img src=\"../img/product_details/small/201603121749419039.jpg\" alt=\"\" />",
                  "<span>iDream 5</span>",
                  "</a>",
                  "</div>",
                  "<a class=\"productName\">iDream 5</a>"].join("");
        for(var i = 0; i < obj.length ; i ++){
            var li = $("<li/>");
            ul.append(li);
            li[0].innerHTML = arr;
            li.addClass("myli");
            li[0].data = obj[i];
            li.find("img").attr("src","../img/product_details/small/"+obj[i].product_imgleft1);
            li.find("span").text(obj[i].product_name);
            li.find(".productName").text(obj[i].product_name);
            li.children(".productImg").find("a").attr("href","product_details.html?product_id="+obj[i].product_id+"&product_classifid="+obj[i].product_classifid);
        };

        // 左边的动画效果

        $(".myli").each(function(){
            if($(this)[0].data.product_id == getvl("product_id")){
                $(this).find(".productImg").show();
                $(this).find(".productName").hide();
            }
        })
        $(".productName").click(function() {
            $(this).prev().slideDown();
            $(this).parent().siblings().children(".productImg").slideUp();
            $(this).slideUp();
            $(this).parent().siblings().children(".productName").slideDown();
        });
    })

    // 焦点
    $(".m1").each(function(e) {
        $(this).click(function() {
            $("html,body").animate({
                scrollTop: $(".w"+(e+1)).offset().top
            }, 800);
        });
    });
    // 网络请求
    requestAjax({
      url:"../../php/code/product_details.php?product_id="+getvl("product_id"),
    },function(str){

      var obj = JSON.parse(str);
      layout(obj);
    });
    // 添加数据
    function layout(obj){
      var proRightImg = $(".proRightImg").find("img");
      proRightImg.attr("src","../img/product_details/"+obj.product_img);
      var proThrUl = $('.proThrUl').find("li");
      $(proThrUl[0]).text(obj.product_describe);
      $(proThrUl[1]).text(obj.product_glamour);
      $(".headproduct").text(obj.product_name);
      $(".pro_ideal").find("img").attr("src","../img/product_details/"+obj.product_idea)
      $($(".pro_deThr").find("div")[0]).text(obj.product_describe);
      $($(".pro_deThr").find("div")[1]).text(obj.product_glamour);
      $($(".pro_deThr").find("img")[0]).attr("src","../img/product_details/"+obj.product_describeImg);
      $($(".pro_deThr").find("img")[1]).attr("src","../img/product_details/"+obj.product_glamourImg);
      $($(".pro_deThr").find("img")[2]).attr("src","../img/product_details/"+obj.product_proceImg);
      $(".pro_buyImg").find("img").attr("src","../img/product_details/"+obj.product_bImg)
      var pro_buy = $(".pro_buyDetails");
      pro_buy.find("h2").text(obj.product_name);
      $(pro_buy.find("p")[0]).text(obj.product_bdetail)
      $(pro_buy.find("p")[1]).text(obj.product_type)
      $(pro_buy.find("p")[2]).text(obj.product_bvalue)
      pro_buy.find("span").text(obj.product_color)
      $(pro_buy.find("p")[4]).text(obj.product_sale)
    }
    // 截取键值函数；
    function getvl(name) {
      var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
      if (reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g, " "));
      return "";
    };
  }
)();
