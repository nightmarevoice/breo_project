var activitydetailModule = (
  function(){
    // 截取键值函数；
    function getvl(name) {
      var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
      if (reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g, " "));
      return "";
    };
    requestAjax({
      url:"../../php/code/activitydetail.php?activity_id="+getvl("activity_id"),
    },function(str){
      var obj = JSON.parse(str);
      console.log(obj.acitvity_content)
      $(".activitydetail")[0].innerHTML = obj.acitvity_content;
    })
  }
)()
