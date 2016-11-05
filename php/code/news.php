<?php
    // 1.通过sql获得总过多少行数据
    $mysql = new mysqli("localhost","root","","breo_project");
    if($mysql->connect_errno) {
        die($mysql->connect_errno);
    }
    $mysql->query("set names utf8");
    $sql = "select count(*) from news";
    $result = $mysql->query($sql);

    $arr = array();
    $num = null;
    while($a = $result->fetch_assoc()){
        $num = ["total"=>$a["count(*)"]];
        // array_push($arr,$num); [["total"=>102]]
        // 将num这个数组中的内容全部取出，拼接到$arr中
        $arr = $arr + $num;
    }
    // 查询出当前页的数据
    $page = $_GET["page"];
    $pageNum = $_GET["num"];
    $fromnum = ($page - 1) * $pageNum;

    $arr = $arr + ["per"=>$pageNum,"current_page"=>$page];
    $sql2  = "select * from news limit {$fromnum},{$pageNum}";
    $result2 = $mysql->query($sql2);
    $values = [];
    while ($a = $result2->fetch_assoc()){
        array_push($values,$a);
    }
    $arr = $arr + ["values"=>$values];

    $str = json_encode($arr);
    echo $str;
 ?>
