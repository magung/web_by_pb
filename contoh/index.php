<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml' lang='en' xml:lang='en' style='height:100%'>
<head>
	<title>CONTOH</title>
	
	<meta http-equiv='content-type' content='text/html;charset=UTF-8'>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv='content-script-type' content='text/javascript'>
	
	<link type='image/x-icon' rel='icon' href='include/logo.ico'>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/js/bootstrap.min.js"></script> 

	<link rel='stylesheet' href='style.css'>
	<script src="reference.js"></script>
	<script src="pegawai.js"></script>
</head>

<body>
<?php
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	ini_set("max_execution_time",300);
	if(function_exists("date_default_timezone_set"))date_default_timezone_set("Asia/Jakarta");

	include "reference.php";
	include "pegawai.php";

	if(isset($_GET["menu"])==false)$_GET["menu"]="";
	if(isset($_GET["flag"])==false)$_GET["flag"]="";

	$con=mysqli_connect("localhost","root","","contoh");

		if ($_GET["menu"]=="") {
			echo urldecode(f_pegawai());
			echo "<script>f_pegawai_list(0)</script>\n";
		} elseif ($_GET["menu"]=="pegawai") { 
			echo urldecode(f_pegawai($_GET["flag"]));
		}

	mysqli_close($con);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
?>
</body>
</html>

