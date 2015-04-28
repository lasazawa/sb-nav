// github.com/filamentgroup/jQuery-Equal-Heights/blob/master/jQuery.equalHeights.js


$.fn.equalHeight = function(child) {
	var tallestChild = 0;
	$(this).each(function() {
		$(child).each(function(x) {
			if ($(this).height() > tallestChild) {
				tallestChild = $(this).height();
			}
		});
		if (navigator.userAgent.match(/msie/i) && navigator.userAgent.match(/6/)); { 
			$(child).css({'height': tallestChild + 6});
		};
	});
};

$(document).ready(function(){

	// make the recipe tile title heights equal no matter the length of recipe name
	
	var recipeTileTitle = $('.recipe-title');
	$('#recipes-container').equalHeight(recipeTileTitle);

});