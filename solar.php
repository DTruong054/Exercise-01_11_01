<?php
$WeatherSource = "https://api.forecast.io/forecast/dd0892fb696bb67da55b436b84172441/" . $_GET["lat"] . "," . $_GET["lng"];
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>