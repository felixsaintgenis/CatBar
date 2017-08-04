$(document).ready(function() {
	$("#tout_la_carte").click(function(){
	$("button").removeClass("active");
	$("#tout_la_carte").addClass("active");

    $(".tout_la_carte").fadeOut(1000).fadeIn(2000);
});
	$("#petit_dej").click(function(){
	$("button").removeClass("active");
	$("#petit_dej").addClass("active");
	$('.tout_la_carte').fadeOut(1000);
    $(".petit_dej").fadeIn(2000);
});

$("#dej").click(function(){
	$("button").removeClass("active");
		$("#dej").addClass("active");
	$('.tout_la_carte').fadeOut(1000);
    $(".dej").fadeIn(2000);
});
$("#diner").click(function(){
	$("button").removeClass("active");
	$("#diner").addClass("active");
	$('.tout_la_carte').fadeOut(1000);
    $(".diner").fadeIn(2000);
});
$("#cocktails").click(function(){
	$("button").removeClass("active");
	$("#cocktails").addClass("active");
	$('.tout_la_carte').fadeOut(1000);
    $(".cocktails").fadeIn(2000);
});

});