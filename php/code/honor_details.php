<?php
$getId = $_GET["honor_id"];
$mysql = new mysqli("localhost","root","","breo_project");
if($mysql->connect_errno){
  die(connect_errno);
};
$mysql->query("set names utf8");
$sqlstr = "select * from honor where honor_id = \"{$getId}\"";
$result = $mysql->query($sqlstr);

//将查询的数据放到数组中;
// fetch_assoc:查询出每一条在result中的数据

$arr = array();
while($record = $result->fetch_assoc()){
  array_push($arr,$record);
}
echo json_encode($arr[0]);
?>
