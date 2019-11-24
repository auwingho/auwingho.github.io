<?php 
if(@$_POST['name']!=''){
$name=$_POST['name'];
$email=$_POST['email'];
$sub=$_POST['subject'];
$message=$_POST['message'];

mb_internal_encoding("utf-8");
$to="b08106032@ntu.edu.tw";
$subject=mb_encode_mimeheader("$sub","utf-8");
$message="$message";
$headers="MIME-Version: 1.0\r\n";
$headers.="Content-type: text/html; charset=utf-8\r\n";
$headers.="From:".mb_encode_mimeheader("$name","utf-8")."<$email>\r\n";
mail($to,$subject,$message,$headers);}
?>
