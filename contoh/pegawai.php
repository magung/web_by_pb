<?php
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_pegawai($flag=""){
		if(is_numeric(strpos($flag,"list"))){return f_pegawai_list($flag);}
	elseif(is_numeric(strpos($flag,"detail"))){return f_pegawai_detail($flag);}
	else{
		$html=
			"<table class='explorer'>
				<tr>
					<td style='min-width:250px;vertical-align:top'>
						<div class='header-left' id='header_left'></div>
						<div class='panel-data' id='pegawai_list'></div>
						<div class='footer-left' id='footer_left'>
							<input id='pegawai_search' type='text' style='height:24px' onkeyup=f_pegawai_search(event.keyCode)> 
							<button class='btn btn-info btn-xs btn-75' onclick=f_pegawai_search(13)>Search</button>
						</div>
					</td>
					<td style='width:75%;vertical-align:top'>
						<div class='header-right' id='header_right'>123456</div>
						<div class='panel-data' id='pegawai_detail'></div>
						<div class='footer-right' id='footer_right'>
							<button class='btn btn-danger btn-xs btn-75' onclick=f_pegawai_delete()>Delete</button> 
							<button class='btn btn-success btn-xs btn-75' onclick=f_pegawai_edit()>Edit</button> 
							<button class='btn btn-warning btn-xs btn-75' onclick=f_pegawai_new()>New</button>
						</div>
					</td>
				<tr>
			</table>";

		return str_replace("\t","",str_replace("\n","",str_replace("\r","",$html)));
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_pegawai_list($flag){	//list*|*0
	$flag=explode("*|*",$flag);
	if($flag[2]=="undefined")$flag[2]="";

	$start=$flag[1];
	$limit=1000;
	$browse="";
	$html="";

	$row=mysqli_num_rows(mysqli_query($GLOBALS["con"],"SELECT id_pegawai FROM pegawai WHERE nama LIKE '%$flag[2]%'"));
	for($i = 0; $i < $row; $i+=$limit){
		$browse=$browse.
			"<option value = $i".($i == $flag[1] ? " selected" : "").">".
				($i + 1)." - ".($i + $limit < $row ? $i + $limit : $row).
			"</option>";
	}
	$browse="<select id='pegawai_browse' onchange=f_pegawai_list(this.value)>$browse</select> $row rekord";

	$q=mysqli_query($GLOBALS["con"],"SELECT * FROM pegawai WHERE nama LIKE '%$flag[2]%' ORDER BY tanggal_lahir LIMIT $start,$limit");
	while($h=mysqli_fetch_array($q)){
		$start++;
		$html=$html.
			"<tr id='pegawai_".($start-$flag[1])."' data-id='$h[id_pegawai]' onclick=f_pegawai_select(this)>
				<td class='list-left'>$start</td>
				<td class='list-right'>$h[nama]</td>
			</tr>";
	}
	
	return "<table style='width:100%;cursor:pointer'>$html</table>@|@$browse";
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_pegawai_detail($flag){
	$flag=explode("*|*",$flag);
	$html="";
	$q=mysqli_query($GLOBALS["con"],"SELECT * FROM pegawai WHERE id_pegawai='$flag[1]'");
	while($h=mysqli_fetch_array($q)){
		$html=
			f_readonly_txt("caption:=Nama:|value:=$h[nama]").
			f_readonly_txt("caption:=Tempat/Tanggal Lahir:|value:=$h[tempat_lahir], ".f_ymd2dmy($h["tanggal_lahir"])).
			f_readonly_txt("caption:=Jenis Kelamiin:|value:=$h[jenis_kelamin]").
			f_readonly_txt("caption:=Golongan Darah:|value:=$h[golongan_darah]").
			f_readonly_txt("caption:=Pendidikan:|value:=$h[pendidikan]").
			f_readonly_txt("caption:=Pekerjaan:|value:=$h[pekerjaan]").
			f_readonly_txt("caption:=Alamat Rumah:|value:=$h[alamat]").
			f_readonly_txt("caption:=Kota/Kabupaten:|value:=".f_lookup($GLOBALS["con"],"adm","name","id=$h[kota]")).
			f_readonly_txt("caption:=Provinsi:|value:=".f_lookup($GLOBALS["con"],"adm","name","id=LEFT($h[kota],2)")).
			f_readonly_txt("caption:=Handphone:|value:=$h[handphone]").
			f_readonly_txt("caption:=Email:|value:=$h[e_mail]");
	}

	return "<table style='width:90%;margin:auto;margin-top:20px'>$html</table>";
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
?>
