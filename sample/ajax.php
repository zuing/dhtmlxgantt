<?php
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT"); // Date in the past

if (isset($_GET['t']) && $_GET['t']=='syn_planH')
{
	$str = file_get_contents($_GET['file']);
	
	$str = preg_replace("/planH\s*=\s*'(.*?)'/is", "planH = '".$_GET['p_planH']."'",$str);

	//$str = preg_replace("/<planH>(.*?)<\/planH>(.*?)<duration>(.*?)<\/duration>/ise","match(\"\\3\",\"\\2\")",$str);
	//$str = preg_replace("/<planH>(.*?)<\/planH>(.*?)<duration>(.*?)<\/duration>/is","/<planH>\\3</planH>\\2<duration>\\3</duration>/",$str);
	$str = preg_replace("/<planH>(.*?)<\/planH>(.*?)<duration>(.*?)<\/duration>/is","/<planH>\${3}</planH>\${2}<duration>\${3}</duration>/",$str);
	$f = fopen($_GET['file'], 'w');
	fwrite($f, $str);
	fclose($f);
}

