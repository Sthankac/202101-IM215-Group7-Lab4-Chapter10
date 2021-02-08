/* put your animation code here */

$(function()	{
$("button").click(function(){
$("#box").animate({left:	'495px'});
});				
});
/*---when we click the animate button the box moves to left*/
$("button").click(function(){
$("#box").animate({
left:	'495px',
opacity:	'1',
height:	'50px'											
});								
});
$("button").click(function(){
$("#box")
.animate({
left:	'495px',
opacity:	'1',
height:	'50px'											
})
.animate({top:	'400px',	opacity:	'0.2'})
.animate({height:	'200px'},	2000);									
});