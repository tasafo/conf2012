// JavaScript Geral

( function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if(d.getElementById(id))
return;
js = d.createElement(s);
js.id = id;
js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// Menu com Scroll 

$(function() {
$("#main-nav-menu a").click(function(e) {
console.log($(this).attr("href"));
$('html, body').animate({
scrollTop : $($(this).attr("href")).offset().top
}, 1000);
return false;
});
})


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-30964233-1']);
_gaq.push(['_trackPageview']); (function() {
var ga = document.createElement('script');
ga.type = 'text/javascript';
ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(ga, s);
})();

s