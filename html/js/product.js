var productModule = (function(){
  requestAjax({
    url:"../../php/code/product.php",
  },function(str){
    var choose = $(".choose");
    var chooseImg = $(".choose>img");
    var obj = JSON.parse(str);

    for(var i = 0; i < obj.length ;i ++){

      $(chooseImg[i]).attr("src","../img/product/"+obj[i].product_img)
    }
      var a = getvl("type");

      document.getElementsByClassName('porAll')[a].scrollIntoView(true);
  });
  // 截取键值函数；
  function getvl(name) {
    var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
    if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " "));
    return "";
  };
})()
