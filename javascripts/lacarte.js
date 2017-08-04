$(document).ready(function() {
	$("#tout_la_carte").click(function(){
	$("button").removeClass("active");
	$("#tout_la_carte").addClass("active");
    $(".tout_la_carte").show("slow");
});
	$("#petit_dej").click(function(){
	$("button").removeClass("active");
	$("#petit_dej").addClass("active");
	$('.tout_la_carte').hide("slow");
    $(".petit_dej").show("slow");
});

$("#dej").click(function(){
	$("button").removeClass("active");
		$("#dej").addClass("active");
	$('.tout_la_carte').hide("slow");
    $(".dej").show("slow");
});
$("#diner").click(function(){
	$("button").removeClass("active");
	$("#diner").addClass("active");
	$('.tout_la_carte').hide("slow");
    $(".diner").show("slow");
});
$("#cocktails").click(function(){
	$("button").removeClass("active");
	$("#cocktails").addClass("active");
	$('.tout_la_carte').hide("slow");
    $(".cocktails").show("slow");
});

});