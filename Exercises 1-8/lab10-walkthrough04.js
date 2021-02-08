$(".panel").on("click",	function()	{
				$("#message").html("You	clicked	in	the	panel");
});
//when you click inside the box the message appears.
$(function	()	{
				//	chaining	handlers
				$(".panel")
								.on("mousemove",function	(e)	{
											$("#message").html("x="	+	e.pageX	+	"	y="	+	e.pageY);
								})
								.on("mouseleave",function	(e)	{
											$("#message").html("goodbye!");
								})
								.on("click",function	()	{
											$("#message").html("stopped	move	reporting");
											$(".panel").off("mousemove");
								});		
});	