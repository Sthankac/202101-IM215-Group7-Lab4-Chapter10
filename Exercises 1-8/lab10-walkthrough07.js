/* put your animation code here */
$(function	()	{	
			
$('figure	img').on('mouseover',	function	(e)	{
								

var	alt	=	$(this).attr('alt');
var	src	=	$(this).attr('src');								
var	newsrc	=	src.replace("small","medium");
								
/*---This make image appear bigger when we click on that image---*/
var	preview	=	$('<div	id="preview"></div>');
var	image	=	$('<img	src="'	+	newsrc	+	'">');
var	caption	=	$('<p>'	+	alt	+	'</p>');
preview.append(image);
preview.append(caption);
$('body').append(preview);
//	This make small	image	gray when pointer is placed on the image//
$(this).addClass("gray");

$("#preview").fadeIn(1000);										
});			
});
function	removePreview()	{
$(this).removeClass("gray");
$("#preview").remove();
}		
function	movePreview(e)	{

$("#preview")
.css("top",	(e.pageY	- 10)	+	"px")
.css("left",	(e.pageX	+	30)	+	"px");																										
}
