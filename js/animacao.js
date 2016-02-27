$(document).ready(function() {
  $("#ondas1").everyTime(4, function() {
    $("#ondas1").animate({top:"380px"}, 1500).animate({top:"410px"}, 1500);
  });

  $("#ondas2").everyTime(6, function() {
    $("#ondas2").animate({top:"390px"}, 1500).animate({top:"380px"}, 1500);
  });

  $("#ondas3").everyTime(6, function() {
    $("#ondas3").animate({top:"300px"}, 1500).animate({top:"320px"}, 1500);
  });

  $("#ondas4").everyTime(6, function() {
    $("#ondas4").animate({top:"280px"}, 1500).animate({top:"250px"}, 1500);
  });

  $("#ondas5").everyTime(6, function() {
    $("#ondas5").animate({top:"230px"}, 1500).animate({top:"260px"}, 1500);
  });

  $("#ondas6").everyTime(6, function() {
    $("#ondas6").animate({top:"240px"}, 1500).animate({top:"210px"}, 1500);
  });

  $("#box-barco").everyTime(6, function() {
    $("#box-barco").animate({top:"50px"}, 1500).animate({top:"65px"}, 1500);
  });
});
