<?php
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_readonly_txt($flag){
	$flag=f_splitter($flag);
	$flag=
		"<tr>
			<td class='caption'>
				$flag[1]
			</td>
			<td style='width:100%;padding:2px;'>
				<input class='data' id='$flag[0]' value='$flag[3]' type='text' disabled>
			</td>
		</tr>";
		
	return $flag;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_splitter($flag){
	$flag=explode("|",$flag);
	$id=$caption=$placeholder=$value=$event=$option=$unique=$purpose=$extra="";
	$output=array("","","","","","","","","");
	for($i=0;$i<count($flag);$i++){
		$flag[$i]=explode(":=",$flag[$i]);
			if($flag[$i][0]=="id")$output[0]=$flag[$i][1];
		elseif($flag[$i][0]=="caption")$output[1]=$flag[$i][1];
		elseif($flag[$i][0]=="placeholder")$output[2]=$flag[$i][1];
		elseif($flag[$i][0]=="value")$output[3]=$flag[$i][1];
		elseif($flag[$i][0]=="event")$output[4]=$flag[$i][1];
		elseif($flag[$i][0]=="option")$output[5]=$flag[$i][1];
		elseif($flag[$i][0]=="unique")$output[6]=$flag[$i][1];
		elseif($flag[$i][0]=="purpose")$output[7]=$flag[$i][1];
		elseif($flag[$i][0]=="extra")$output[8]=$flag[$i][1];
	}
	return $output;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_ymd2dmy($flag){
	$monthtext=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
	$flag=explode("-",$flag);
	return $flag[2]." ".$monthtext[intval($flag[1])-1]." ".$flag[0];	// Y-m-d -> dd mmmm yyyy
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_lookup($connection,$table,$field,$where){
	$q=mysqli_query($connection,"SELECT CONCAT($field) FROM $table WHERE $where");
	while($h=mysqli_fetch_array($q)){return $h[0];}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
?>