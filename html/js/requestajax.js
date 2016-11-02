function requestAjax(obj,callFun){
  var variable = new XMLHttpRequest();
  variable.open("GET",obj.url,true);
  variable.send();
  variable.onreadystatechange = function(){
    if(variable.readyState == 4 && variable.status == 200){
      var str = variable.responseText;
      if(callFun){
        callFun(str);
      }
    }
  }
}
