var honorModule = (
  function(){
    requestAjax({
      url:"../../php/code/honor.php"
    },function(str){
      var obj = JSON.parse(str);
      addData(obj);
    });
    function addData(obj){
      var honorList = $(".honorList");
      var ul = $("<ul/>");
      honorList.append(ul);
      var arr = "<div class=\"honorImg\">"+
                "<a href=\"#\"title=\"\">"+
                "<img src=\"1\" alt=\"\" />"+
                "</a>"+
                "</div>"+
                "<div class=\"honorDec\">"+
                "<h2>"+
                "<a href=\"#\"></a>"+
                "<span></span>"+
                "</h2>"+
                "<p></p>"+
                "</div>";
      for(var  i = 0;i < obj.length; i++ ){
        var li = $("<li/>");
        li[0].data = obj[i];
        ul.append(li);
        li[0].innerHTML = arr;
        $(".honorImg").children("a")[i].title = li[0].data.honor_title;
        $(".honorImg").children("a")[i].href = "../html/honor_details.html?honor_id="+li[0].data.honor_id;
        $(".honorImg").find("img")[i].src = "../img/honorImg/" + li[0].data.honor_img;
        $(".honorDec").find("a")[i].innerHTML = li[0].data.honor_title;
        $(".honorDec").find("a")[i].href = "../html/honor_details.html?honor_id="+li[0].data.honor_id;
        $(".honorDec").find("span")[i].innerHTML = li[0].data.honor_date;
        $(".honorDec").find("p")[i].innerHTML = li[0].data.honor_word;
      };
    }
  }
)()
