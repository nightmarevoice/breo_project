var homeModule = (
  function(){
    $(".product").mouseover(function (){
          $("#productpull").show();
      }).mouseout(function (){
          $("#productpull").hide();
      });
    $(".brand").mouseover(function (){
          $("#brandpull").show();
      }).mouseout(function (){
          $("#brandpull").hide();
      });
  }
)()
