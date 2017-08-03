$(document).ready(function() {
	$("#tout_la_carte").click(function(){
	$("a").removeClass("active");
	$("#tout_la_carte").addClass("active");
    $(".tout_la_carte").show("swing");
});
	$("#petit_dej").click(function(){
	$("a").removeClass("active");
	$("#petit_dej").addClass("active");
	$('.tout_la_carte').hide("swing");
    $(".petit_dej").show("swing");
});

$("#dej").click(function(){
	$("a").removeClass("active");
		$("#dej").addClass("active");
	$('.tout_la_carte').hide("swing");
    $(".dej").show("swing");
});
$("#diner").click(function(){
	$("a").removeClass("active");
	$("#diner").addClass("active");
	$('.tout_la_carte').hide("swing");
    $(".diner").show("swing");
});
});