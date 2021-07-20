$(function() {
	$(".c-souce-popup").prepend("<ul class=\"c-souce-popup__tab\"></ul>");
	$(".c-souce-popup__tab").append("<li class=\"c-souce-popup__category --html --active\">HTML</li>");
	$(".c-souce-popup__tab").append("<li class=\"c-souce-popup__category --css\">CSS</li>");
	$(".c-souce-popup__tab").append("<li class=\"c-souce-popup__category --js\">JS</li>");
})

$(function() {
	$(".c-souce-popup__category").click(function() {
		$(".c-souce-popup__category.--active").removeClass("--active");
		$(this).addClass("--active");
		$(".c-souce-popup__code.--show").removeClass("--show");
		const index = $(this).index();
		$(".c-souce-popup__code").eq(index).addClass("--show");
	})
})