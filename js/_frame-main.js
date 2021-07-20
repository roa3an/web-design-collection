$(function() {
	$(".c-popup-event").magnificPopup({
		type:'inline',
		callbacks: {
			open: function() {
				$(".c-souce-popup__category.--html").addClass("--active");
				$(".c-souce-popup__category.--css").removeClass("--active");
				$(".c-souce-popup__category.--js").removeClass("--active");
				$(".c-souce-popup__code.--html").addClass("--show");
				$(".c-souce-popup__code.--css").removeClass("--show");
				$(".c-souce-popup__code.--js").removeClass("--show");
			}
		}  
	})
})