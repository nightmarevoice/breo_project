var newsModule = (
  function(){
    requestAjax({
      url:"../../php/code/news.php"
    },function(str){
      var obj = JSON.parse(str);
      var array = [];
      for(var j = obj.length-1;j>-1;j--){
        array.push(obj[j]);
      }
        console.log(array);
         test(array);
    });
    function test(obj){
      var newsList = $(".newsList");
      var ul = $("<ul/>");
      newsList.append(ul);
      var arr = "<div class=\"newsImg\">"+
                "<a href=\"#\"title=\"\">"+
                "<img src=\"1\" alt=\"\" />"+
                "</a>"+
                "</div>"+
                "<div class=\"newsDec\">"+
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
        $(".newsImg").children("a")[i].title = li[0].data.news_title;
        $(".newsImg").children("a")[i].href = "../html/news_details.html?news_id="+li[0].data.news_id;
        $(".newsImg").find("img")[i].src = "../img/newsImg/" + li[0].data.news_img ;
        $(".newsDec").find("a")[i].innerHTML = li[0].data.news_title;
        $(".newsDec").find("a")[i].href = "../html/news_details.html?news_id="+li[0].data.news_id;
        $(".newsDec").find("span")[i].innerHTML = li[0].data.news_date;
        $(".newsDec").find("p")[i].innerHTML = li[0].data.news_word;
      };
    }
  }
)()
