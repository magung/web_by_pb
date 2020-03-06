<?php
	$koneksi=mysqli_connect("localhost", "root", "", "contoh");

	$query=mysqli_query($koneksi, "SELECT * FROM pegawai LIMIT 0, 1000");

	while($hasil=mysqli_fetch_array($query)){
		echo $hasil["nama"];
	}

	mysqli_close($koneksi);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
?>

