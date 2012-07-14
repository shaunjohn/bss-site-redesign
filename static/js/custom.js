$(document).ready(function() {

		var successHtml = '<strong>Thanks for your interest!</strong> We\'ll contact you at the email address you specified.  Feel free to start working on the rest of the application below.';
		var failureHtml = '<strong>Oops!</strong> Something went wrong &mdash; please make sure you entered a valid email address.';
		
		
		var msgDiv = $("div#applynowemailmsg");
		var emailDiv = $("input#applynowemail");
		var emailButton = $("a#applynowemailbutton");
		var toggleApp = $("a#toggleapp");
		var fullApp = $("div#fullapp");
		
		var imgLeft = ($(window).width() / 2.0) - 60;
		
		$("div#logo").css("left", imgLeft + "px");
		$("div#logo").css("top", "10px");
		$("div#logo").css("position", "fixed");
		
		
		cycleCTA();
		
		$("div#bigshinyapply").click(function() {
		
			emailDiv.select();
		
		});
		
		
		emailDiv.keypress(function(event) {
		
			msgDiv.slideUp();
			
			code = (event.keyCode ? event.keyCode : event.which);
			if (code == 13 || code == 10)
			{
				emailButton.click();
			}
			
		});
		
		emailButton.click(function(event) {
		
			if(emailDiv.val() == "")
			{
				emailDiv.select();
				msgDiv.html(failureHtml);
				msgDiv.removeClass("alert-success").addClass("alert-error");
				msgDiv.slideDown();
				return;
			}
		
		/*
			$.post("some_page", {address:emailDiv.val()}, function(data) {
			
				// ... send email to address specified and inform them of success
				
				
			
			}, "json");
		*/
		
			msgDiv.html(successHtml);
			msgDiv.removeClass("alert-error").addClass("alert-success");
			msgDiv.slideDown();
			emailDiv.val("");
			toggleApp.click();
		
		});
		
		emailDiv.click(function(event) {
		
			msgDiv.slideUp();
		
		});
		
		toggleApp.click(function(event) {
		
			if(fullApp.css("display") == "none")
			{
				$(this).html("&laquo; Hide application");
				fullApp.slideDown();
			}
			else
			{
				$(this).html("Show full application &raquo;");
				fullApp.slideUp();
			}
		
		});
		
		$("a.scroll").click(function() {
		
			var path = $(this).attr("id").split("_")[1];			
			scrolling(path);
		
		});
});

function cycleCTA()
{
	var p1 = $("p#ctatext1");
	var p2 = $("p#ctatext2");
	
	if(p1.css("display") == "none")
	{
		p2.fadeOut(1000, function() { p1.fadeIn(1000); });
	}
	else
	{
		p1.fadeOut(1000, function() { p2.fadeIn(1000); });
	}
	
	setTimeout("cycleCTA()", 7000);
}

function scrolling(id)
{
	$("html,body").animate({scrollTop: $("#" + id).offset().top - 80}, 1000);
}