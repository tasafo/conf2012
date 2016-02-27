$(function() {
  $("#main-nav-menu a").click(function(e) {
    $('html, body').animate({
      scrollTop : $($(this).attr("href")).offset().top
    }, 1000);
    return false;
  });

  $(".spinner").remove();
  $('.percentage').remove();
  $('.sub_vote').prev().remove();
  $('.sub_vote').remove();

  $("#proposal_list a").each(function() {
    var stringLink = $(this).attr('href');
    var link = "http://call4paperz.com" + stringLink;
    $(this).attr("href", link);
  });

  $('.voting_container').remove();

  setTimeout(function() {
      $("#pog-call4pappers").load("call4paperz.php");
  }, 5000);
});
