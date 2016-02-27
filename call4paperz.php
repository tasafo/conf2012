<?php

$handle = fopen ("http://call4paperz.com/events/t%C3%A1-safo-conf-lightning-talks" , "r");

//pull down the contents of that page
$contents = stream_get_contents($handle);
//close the connection
fclose($handle);

/*convert everything to lower case so it’s easier to do my string matching (not necessarily a must)*/
$contents = $contents;

/*I looked at the HTML coming down, and found that this was the best consistent place to look at to determine the beginning of the “scripture” content.*/
$start = '<div id="proposal_list">';
//find the position of the start text in the page content
$start_pos = strpos($contents, $start);

//drop the text before the start position
$first_trim = substr($contents, $start_pos);

/*this looked to be the best consistent ending of the scripture in the HTML*/
$stop = '<script type="text/javascript">';
//find the position of the stop string in the content
$stop_pos = strpos($first_trim, $stop);

//drop everything after the stop position
$second_trim = substr($first_trim, 0, $stop_pos);

//print out the results
print "<div>$second_trim</div>";
