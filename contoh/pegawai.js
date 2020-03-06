function f_pegawai_list($flag){
	//alert("index.php?menu=pegawai&flag=list*|*"+$flag+"*|*"+$("#pegawai_search").val())
	$.get("index.php?menu=pegawai&flag=list*|*"+$flag+"*|*"+$("#pegawai_search").val(),
		function($data){//
			$data=f_split($data);
			$("#header_left").html($data[1]);
			$("#pegawai_list").html($data[0]);
			$("#pegawai_list").scrollTop(0);
			$("#pegawai_detail").html("");
			$("#pegawai_1").click();
		}
	);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_pegawai_select($this){
	$($this).css("background-color","#bbf9c9").siblings().css("background-color","transparent");
	//alert("index.php?menu=pegawai&flag=detail*|*"+$($this).data("id"))
	$.get("index.php?menu=pegawai&flag=detail*|*"+$($this).data("id"),
		function($data){//
			$data=f_split($data);
			$("#pegawai_detail").html($data[0]);
			$("#pegawai_detail").scrollTop(0);
		}
	);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_pegawai_search($event){
	if($event==13)f_pegawai_list(0);
	$("#pegawai_search").focus();
}