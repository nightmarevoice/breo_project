var newsModule = (
  function(){
    var nowpage = null;
    // 截取键值函数；
    function getvl(name) {
      var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
      if (reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g, " "));
      return "";
    };
    function ajax(){
      requestAjax({
        url:"../../php/code/news.php?page="+getvl("page")+"&num="+getvl("num"),
      },function(str){

        var obj = JSON.parse(str);
        var numPage = Math.ceil(Number(obj.total)/10);
        addData(obj.values);
        if($(".fenye").find("li").length==4){
            page(numPage);
        }
        console.log(Number(getvl("page")-1))
        $($(".mya")[Number(getvl("page")-1)]).css({
            background:"#00a0e9",
            color:"#fff",
        })

        click(obj.values,numPage);
      });
    }
    // 分页
    function page(numPage){
        var myli = $(".add");
        for(var i = 0; i < numPage; i++){
            var li = $("<li/>");
            var a = $("<a/>")
            a.addClass("mya");
            li.append(a);
            a.text(i+1);
            myli.after(li);
            myli = li;
        }
    }
    // 添加点击事件
    function click(obj,numpage){
      // 首页点击事件
        $(".headpage").attr("href","news.html?page=1&num=10");
        // 上一页点击事件
        if(getvl("page")==1){
          $(".uppage").click(function (event) {
                event.preventDefault();
          });
        }else{
          $(".uppage").click(function(){
            $(this).attr("href","news.html?page="+(Number(getvl("page"))-1)+"&num=10");
          });
        }
        // 下一页点击事件
        if(getvl("page")==numpage){
          $(".downpage").click(function (event) {
                event.preventDefault();
          });
        }else{
          $(".downpage").click(function(){
              $(this).attr("href","news.html?page="+(Number(getvl("page"))+1)+"&num=10");
          })
        }
        // 尾页点击事件
        $(".lastpage").attr("href","news.html?page="+numpage+"&num=10");
        // 页码点击事件
        $(".mya").each(function(){
            $(this).attr("href","news.html?page="+$(this).text()+"&num=10");
        })
    }
    // 动态添加数据
    function addData(obj){
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
    ajax();
  }
)()
