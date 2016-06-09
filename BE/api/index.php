<?php
function returnJson($resultArray){
  if(array_key_exists('callback', $_GET)){
    $json = $_GET['callback'] . "(" . json_encode($resultArray) . ");";
  }else{
    $json = json_encode($resultArray);
  }
  header('Content-Type: text/html; charset=utf-8');
  echo  $json;
  exit(0);
}
exec('python test.py', $out);
  $result = [
    'result' => 'OK',
    'key' => $out[0]
  ];
returnJson($result);
?>
