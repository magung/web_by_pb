//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_split($data){
	$data=$data.replace(/(\t|\n|\r)/gm,"");
	$data=$data.replace("<body>","@|@");
	$data=$data.replace("</body>","@|@");
	$data=$data.split("@|@");
	$data.shift();
	$data.pop(); 
	return $data;
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_popup($parameter){
	var $param="$popup_id,$title,$message,$button_cancel,$button_cancel_id,$button_cancel_event,$button_extra,$button_extra_id,$button_extra_event,$button_ok,$button_ok_id,$button_ok_event,$left,$top,$width,$height,$padding,$popup_autohide,$overflow_y,$header".split(",");
	
	for(var $i=0;$i<$param.length;$i++){
		$parameter=$parameter.replace($param[$i]+"=","@|@"+$param[$i]+"@|@")
	}
	
	$parameter=$parameter.split("@|@");$parameter.shift();
	$param=$param.join(",");
	
	var $popup_id=$title=$message=$button_cancel=$button_cancel_id=$button_cancel_event=$button_extra=$button_extra_id=$button_extra_event=$button_ok=$button_ok_id=$button_ok_event=$left=$top=$width=$height=$padding=$popup_autohide=$overflow_y=$header="";
	
	for(var $i=0;$i<$parameter.length;$i+=2){
		if($param.indexOf($parameter[$i])!=-1)eval($parameter[$i]+"=$parameter[$i+1]");
	}
	
	$height=parseFloat($height.replace("%",""))/100;
	//$height=parseInt($height);
	
	try{
		$(".modal-backdrop").remove();
		$("#"+($popup_id==""?"messagebox":$popup_id)).remove();
		$("body").css("overflow","hidden")
	}catch(err){}
	
	$("<div "+
		"id='"+($popup_id==""?"messagebox":$popup_id)+"' "+
		"class='modal fade' "+
		"style='position:fixed;left:0px;top:0px;overflow:hidden;z-index:99999999' "+
		"data-backdrop='static' "+
		"data-keyboard='false'"+
	">"+
		"<div "+
			"class='modal-dialog modal-content"+($width==""?"":" modal-"+$width)+"' "+
			"style='"+
				($left==""?"":"margin-left:"+$left+";")+
				($width.indexOf("%")==-1?"":"width:"+$width+";")+
				(typeof $height=="number"
					?"margin-top:50px;":
					($top==""
						?"margin-top:70px;"
						:"margin-top:"+$top+";"
					)
				)+
				"border-radius:10px'"+
		">"+
			"<div "+
				"class='drag popup-header' "+
				"style='"+
					"padding:3px 8px;"+
					"border-radius:8px 8px 0px 0px;"+
					"cursor:move;"+
					"vertical-align:bottom;"+
					"display:"+$header+"'"+
			">"+
				"<table style='width:100%'>"+
					"<tr>"+
						"<td>"+
							"<strong>"+$title+"</strong>"+
						"</td>"+
						"<td>"+
							"<button "+
								"class='btn btn-danger btn-xs' "+
								"data-dismiss='modal' "+
								"style='float:right'"+
								($button_cancel_id==""?"":" id='"+$button_cancel_id+"'")+
								($button_cancel_event==""?"":" onclick="+$button_cancel_event)+
							">"+
								"<strong>x</strong>"+
							"</button>"+
						"</td>"+
					"</tr>"+
				"</table>"+
			"</div>"+
			"<div "+ 
				"id='modal_body' "+
				"class='modal-body popup-content' "+
				"style='"+
					($overflow_y==""?"":"overflow-y:"+$overflow_y+";")+
					($padding==""?"":"padding:"+$padding+";")+
					($height==""?"":(typeof $height=="number"?"height:calc(100vh * "+$height+" - 155px)":"height:"+$height))+
					";background-color:transparent;line-height:1.6'"+
			">"+
				$message+
			"</div>"+
			"<input type='hidden' id='"+($popup_id==""?"messagebox":$popup_id)+"_tag'>"+
			"<div class='popup-header text-center' style='padding:3px;border-radius:0px 0px 8px 8px'>"+
				($button_cancel==""?"":
					"<button type='button' "+
						"style='width:120px' class='btn btn-danger btn-xs' "+
						"data-dismiss='modal'"+
						($button_cancel_id==""?"":" id='"+$button_cancel_id+"'")+
						($button_cancel_event==""?"":" onclick="+$button_cancel_event)+
					">"+
						"<strong>"+$button_cancel+"</strong>"+
					"</button>"
				)+
				($button_extra==""?"":
					"<button type='button' "+
						"style='width:120px' class='btn btn-warning btn-xs'"+
						($button_extra_id==""?"":" id='"+$button_extra_id+"'")+
						($button_extra_event==""?"":" onclick="+$button_extra_event)+
					">"+
						"<strong>"+$button_extra+"</strong>"+
					"</button>"
				)+
				($button_ok==""?"":
					"<button type='button' "+
						"style='width:120px' class='btn btn-success btn-xs'"+
						($button_ok_id==""?"":" id='"+$button_ok_id+"'")+
						($popup_autohide==""?" data-dismiss='modal'":"")+
						($button_ok_event==""?"":" onclick="+$button_ok_event)+
					">"+
						"<strong>"+$button_ok+"</strong>"+
					"</button>"
				)+
			"</div>"+
		"</div>"+
	"</div>").appendTo("body").modal("show");

	$(".modal-backdrop").css({opacity:0.3});

	//wajib ada jquery-ui.js, dan harus ditempatkan setelah jquery.js
	$("#"+($popup_id==""?"messagebox":$popup_id)).draggable({handle:".drag"});
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_calendar($this,$flag,$parent){
	e=function($id){//
		return document.getElementById($id);
	}
	$parent=e($parent);
	var $editor=$yearmin=$yearmax=$showage=$monthtxt=$position="";
	$d=new Date().getFullYear();
	$flag=$flag.split(";");
	for(var $i=0;$i<$flag.length;$i++){
		$flag[$i]=$flag[$i].split(":");
		if($flag[$i][0]=="editor")$editor=$flag[$i][1];
		if($flag[$i][0]=="yearmin")$yearmin=$d+Number($flag[$i][1]);		
		if($flag[$i][0]=="yearmax")$yearmax=$d+Number($flag[$i][1]);
		if($flag[$i][0]=="showage")$showage=$flag[$i][1];
		if($flag[$i][0]=="monthtxt")$monthtxt=$flag[$i][1];
		if($flag[$i][0]=="position")$position=$flag[$i][1];
	}
	$this.blur();
	var $calendarbox=document.createElement("div");
	$calendarbox.setAttribute("id","calendarbox");
	$calendarbox.setAttribute("style","position:"+($position==""?"absolute":$position)+";left:0px;top:0px;width:100%;height:100%;z-index:999999999999");
	document.body.appendChild($calendarbox);
	
	if(typeof $parent=="undefined")$parent=0;else $parent=$parent.scrollTop;
	var $pos=$this;$l=$pos.offsetLeft;$t=$pos.offsetTop;$w=$pos.offsetWidth;$h=$pos.offsetHeight;
	while($pos){$l=$l+$pos.offsetLeft;$t=$t+$pos.offsetTop;$pos=$pos.offsetParent;}
	
	f_calendar1=function($date){//
		var $monthtext="Januari|Februari|Maret|April|Mei|Juni|Juli|Agustus|September|Oktober|November|Desember".split("|");
		$date=$date.replace(/ /gi,"&nbsp;");
		var $datetemp=$date.split("&nbsp;");
		for(var $i=0;$i<$monthtext.length;$i++){
			if($monthtext[$i]==$datetemp[1]){
				$datetemp[1]=$i+1;
				break;
			}
		}
		
		$date=$datetemp.join("/");
		if($date=="//")$date="";
		$date=$date.split(" ");$date=$date[0];
		$date=($date!=""?$date:new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()).split("/");
		var $date1=new Date($date[2],$date[1]-1,1);
		var $start=$date1.getDate()-$date1.getDay();

		var $temp=$day=$mm=$yy="";
		for(var $i=($yearmin==""?1900:$yearmin);$i<=($yearmax==""?2100:$yearmax);$i++){
			$yy="<option value="+($i)+" "+($i==$date[2]?"selected":"")+">"+($i)+"</option>"+$yy;
		}
		for(var $i=0;$i<$monthtext.length;$i++){
			$mm=$mm+"<option value="+($i+1)+" "+($i+1==$date[1]?"selected":"")+">"+$monthtext[$i]+"</option>";
		}

		var $daytext="Min|Sen|Sel|Rab|Kam|Jum|Sab".split("|");
		for(var $i=0;$i<7;$i++){
			$day=$day+
				"<td "+
					"style='"+
						"border:solid 1px #999999;"+
						"padding:5px;"+
						"color:"+($i==0?"#ff0000":($i==6?"#0000ff":($i==5?"#005500":"#000000")))+
					"'"+
				">"+
					$daytext[$i]+
				"</td>";
		}

		for(var $i=$start;$i<$start+42;$i++){
			$date1=new Date($date[2],$date[1]-1,$i);
			if(($i-$start)%7==0&&(($date1.getMonth()>$date[1]-1&&$date1.getFullYear()==$date[2])||$date1.getFullYear()>$date[2]))break;
			$temp=$temp+(($i-$start)%7==0&&$i!=$start?"</tr><tr>":"")+
				"<td "+
					"style='"+
						"padding:"+($i==$date[0]?0:2)+"px;"+
						"cursor:pointer;"+
						"border:solid 1px #999999;"+
						"color:"+($date1.getMonth()!=$date[1]-1?"#999999":(($i-$start)%7==0)?"#ff0000":(($i-$start)%7==6)?"#0000ff":(($i-$start)%7==5?"#005500":"#000000"))+
					";' "+
					"onmouseover=this.style.backgroundColor='#ffff00' "+
					"onmouseout=this.style.backgroundColor='#ffffff' "+
					"onclick=f_click(this.childNodes[0].value)>"+
					"<input type='hidden' value='"+("0"+$date1.getDate()).substr(-2,2)+"/"+("0"+($date1.getMonth()+1)).substr(-2,2)+"/"+$date1.getFullYear()+"'>"+
					($i==$date[0]?"<div style='border:solid 2px'>"+$date1.getDate()+"</div>":$date1.getDate())+
				"</td>";
		}
		
		f_click=function($value){//
			if(typeof $showage=="undefined"||$value=="")$showage="false";
			
			if($showage=="true"){
				$age=$value.split("/");
				$age=(new Date()-new Date($age[2],$age[1]-1,$age[0]))/(24*60*60*1000)/365.25;
				var $id=$this.id.split("_");
				$age=Math.floor($age)+" tahun "+Math.floor(($age-Math.floor($age))*12)+" bulan";
				$value=$value+" ("+$age+")";
			}
			
			if($monthtxt=="true"&&$value!=""){
				$value=$value.split("/");
				$value[1]=$monthtext[Number($value[1])-1];
				$value=$value.join($this.tagName.toLowerCase()=="input"?" ":"&nbsp;");
			}
			
			if($this.tagName.toLowerCase()=="input"){$this.value=$value;}
			else{$this.innerHTML=$value;}
			
			if($editor=="true"){
				$this.oninput();
				$this.focus();
			}

			document.body.removeChild(e('calendarbox'));
			
			try{$this.onchange();}catch(err){}
		}

		$calendarbox.innerHTML=
			"<div style='position:fixed;left:0px;top:0px;width:100%;height:100%' onclick=document.body.style.overflowY='hidden';document.body.removeChild(e('calendarbox'))></div>"+
			"<table id='calendar' style='border-collapse:collapse;border:solid 2px;background-color:#ffffff;position:absolute;left:"+($l-$this.offsetLeft)+"px;top:"+($t-$this.offsetTop+$this.offsetHeight+5-$parent)+"px;text-align:center;box-shadow:10px 10px 5px #888888;padding:5px'>"+
				"<tr>"+
					"<td style='border:solid 1px #000000;padding:3px;text-align:center' colspan=7>"+
						"<select onchange=f_calendar1('"+$date[0]+"/"+"'+this.value+'"+"/"+$date[2]+"')>"+$mm+"</select>&nbsp;&nbsp;"+
						"<select onchange=f_calendar1('"+$date[0]+"/"+$date[1]+"/"+"'+this.value+'"+"')>"+$yy+"</select>"+
						"<button class='btn btn-danger btn-xs' style='float:right;font-weight:bold' title='hapus/kosongkan' onclick=f_click('')>X</button>"+
					"</td>"+
				"</tr>"+
				"<tr>"+$day+"</tr>"+
				"<tr>"+$temp+"</tr>"+
			"</table>";
			
		if(e("calendar").offsetTop+e("calendar").offsetHeight-window.scrollY+40>window.innerHeight){
			e("calendar").style.top=($t-$this.offsetTop-e("calendar").offsetHeight-$parent)+"px";
		}
		
		if(e("calendar").offsetLeft+e("calendar").offsetWidth-window.scrollX>window.innerWidth){
			e("calendar").style.left=(window.innerWidth+window.scrollX-e("calendar").offsetWidth-20)+"px";
		}
	}
	
	f_calendar1($this.value||$this.innerHTML);
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_validchar($event,$validcharacter){
	$event=($event)?$event:window.event;
	if(("|8|13|37|38|39|40|46|").indexOf($event.which)>0)return true; //|backspace|enter|left|down|up|right|delete|
	return($validcharacter.indexOf(String.fromCharCode($event.which))<0?false:true)
}
//-- email validation -------------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_validemail($this){
	if($($this).val()=="")return;
	var $filter=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	if($filter.test($this.value)==false){
		alert("Format penulisan email tidak valid !!!")
		setTimeout(function(){$this.focus();},100);
	}
}
//-- hp validation -------------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_validhp($this){
	if($($this).val()=="")return;
	var $hp_prefix=$("#booking_hp_prefix").val().split("|");
	for(var $i=0;$i<$hp_prefix.length;$i++){if($($this).val().indexOf($hp_prefix[$i])==0){break;}}
	if($i==$hp_prefix.length||$($this).val().length<10){
		alert("Nomor Telepon/Handphone tidak valid !!!");
		setTimeout(function(){$this.focus();},100);
	}
}
//-- convert bytes -------------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_convertbytes($bytes,$decimals){
	if($bytes==0)return "0 Bytes";
	var $sizes=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"];
	var $i=Math.floor(Math.log($bytes)/Math.log(1024));
	return parseFloat(($bytes/Math.pow(1024,$i)).toFixed($decimals))+" "+ $sizes[$i];
}
//-- upload file ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_upload($this){
	if($this.id.indexOf("upload")>-1){
		$.get("index.php?menu=upload&flag="+$this.id,
			function($data){//
				$data=f_split($data);
				f_popup($data[0]);
			}
		);
	}
	else if($this.id=="file_find"){//cari file
		$size=$this.files[0].size;
		$maxsize=111111048576; //1MB (1024 KB)
		$file=$this.value.substr($this.value.lastIndexOf("\\")+1);
		$ext="jpg|jpeg|png";
		if($this.files&&$this.files[0]){
			if($this.files[0].size>$maxsize||$ext.indexOf($file.substr($file.lastIndexOf(".")+1))==-1){
				f_popup(
					"$title=Perhatian..."+
					"$message=File harus dalam format image (jpg, jpeg) dengan ukuran maksimum 1MB (1024 KB)"+
					"$button_ok=Ok"
				);
				return;
			}
			var $reader=new FileReader();
			$reader.onload=function(e){// tampilkan file
				$("#file_preview").attr("src",e.target.result);
			}
			$reader.readAsDataURL($this.files[0]);
			$("#text").html($file+" ("+f_convertbytes($size,2)+")");
			$("#percent").html("0%");
			$("#progresbar").width("0%");
		}
	}
	else if($this.id.indexOf("save")>-1){//simpan file
		var $id=$this.id.replace("|save","")
		//save|anggota_4_14|tmp_20200204215923_1936909511
		$("#flag").val("save|"+$id+"|"+$("#"+$id).data("unique"));
		$("#progres").css("display","");
		$("#form1").ajaxForm({
			beforeSend:function(){//
			},
			uploadProgress:function(event,position,total,percentComplete){//
				$("#percent").html(total+"%");
				$("#progresbar").width(percentComplete+"%");
			},
			success:function($data,textStatus,jqXHR){//
				$("#percent").html("100%");
				setTimeout(function(){$($this).parent().parent().parent().modal("hide");},1000);
				$data=f_split($data);
				if($data==""){
					f_popup(
						"$title=Upload File Gagal..."+
						"$message=Kemungkinan file corrupt/rusak ketika diupload.<br>"+
							"Silakan upload ulang.<br>"+
							"Sebaiknya file diedit ke format jpg yang valid, sebelum diupload."+
						"$button_ok=Ok"
					);
					return;
				}
				$("#"+$id).attr("src",$data[0]+"?r="+Math.floor(Math.random()*(9999999-1000000+1))+1000000);
				$("#"+$id).attr("title","Klik untuk melihat dalam ukuran besar");
			},
		}).submit();
	}
	else if($id[4]=="error"){// error
		f_popup(
			"$title=Upload File Gagal..."+$this.id+
			"$message=Kemungkinan file corrupt/rusak ketika diupload.<br>Silakan upload ulang.<br>Sebaiknya file diedit ke format jpg yang valid, sebelum diupload."+
			"$button_ok=Ok"
		);
	}
	else if($id[2]=="preview"){// zoom
		if($id[3]=="rotate"){
			var $rotate=Number($("#booking_upload_preview_image").attr("data-rotate"))+90;
			$("#booking_upload_preview_image").attr("data-rotate",$rotate);
			$("#booking_upload_preview_image").css("transform","rotate("+$rotate+"deg)");
			if($rotate==360)$rotate=0;
		}
		else if($id[3]=="zoomout"){
			var $width=Number($("#booking_upload_preview_image").attr("data-width"))-10;
			if($width<30)return;
			$("#booking_upload_preview_image").attr("data-width",$width);
			$("#booking_upload_preview_image").css("width",$width+"%");
		}
		else if($id[3]=="zoomin"){
			var $width=Number($("#booking_upload_preview_image").attr("data-width"))+10;
			if($width>1600)return;
			$("#booking_upload_preview_image").attr("data-width",$width);
			$("#booking_upload_preview_image").css("width",$width+"%");
		}
		else{
			if($($this).attr("src")=="identitas/_blank.jpg")return;
			$temp=$($this).attr("src").split("?");
			$.get("index.php?menu=upload&flag=preview@|@"+$temp[0]+"?r="+Math.floor(Math.random()*(9999999-1000000+1))+1000000,
				function($data){//
					$data=f_split($data);
					f_popup($data[0]);
				}
			);
		}
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
onerror=f_error;
function f_error($msg,$url,$line){
	if($msg.indexOf("CKEDITOR")!=-1)return true;
	alert("There was an error on this page.\n\nError: "+$msg+"\nURL: "+$url+"\nLine: "+$line+"\n\nClick OK to continue.\n\n");
	return true;
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function f_encode($value){
	return encodeURIComponent($value).replace(/%EF%BF%BD/gi,"%20");
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
