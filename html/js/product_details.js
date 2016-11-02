var product_detailsModule = (
  function(){
    requestAjax({
      url:"../../php/code/product_details.php"
    },function(str){
      var obj = JSON.parse(str);
      layout(obj);
    });
    function layout(obj){

      var proRightImg = $(".proRightImg").find("img");
      proRightImg.attr("src","../img/product_details/"+obj.product_img);
      var proThrUl = $('.proThrUl').find("li");

      $(proThrUl[0]).text(obj.product_describe);
      $(proThrUl[1]).text(obj.product_glamour);

      $(".pro_ideal").find("img").attr("src","../img/product_details/"+obj.product_idea)
      $($(".pro_deThr").find("div")[0]).text(obj.product_describe);
      $($(".pro_deThr").find("div")[1]).text(obj.product_glamour);
      $($(".pro_deThr").find("img")[0]).attr("src","../img/product_details/"+obj.product_describeImg);
      $($(".pro_deThr").find("img")[1]).attr("src","../img/product_details/"+obj.product_glamourImg);
      $($(".pro_deThr").find("img")[2]).attr("src","../img/product_details/"+obj.product_proceImg);
      $(".pro_buyImg").find("img").attr("src","../img/product_details/"+obj.product_bImg)
    }
  }
)()
