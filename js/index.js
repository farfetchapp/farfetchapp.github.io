$(document).ready(function() {
	var selected = 1;
	var clouddirection = '-';
	var cloud_speed = 0.25;
	var transition_time = 125;
	
	(function animateBG() {
		$('#header').animate({'background-position-x': clouddirection + '=' + cloud_speed}, 12, animateBG);
	})();
	
	$('.clickable').hover(function() {
		$(this).css('cursor','pointer');
		$(this).css('opacity', 1.0);
	},
	function() {
		$(this).css('opacity', 0.25);
	});
	
	$('#arrow_right').click(function() {
		cloud_speed = 90;
		setTimeout(function(){
			cloud_speed = 0.25;
		}, 125);
		$('#download_content').animate({right: '+=150%'}, transition_time);
		$('#classic_content').animate({right: '+=150%'}, transition_time);
		$('#king_of_the_hill_content').animate({right: '+=150%'}, transition_time);
		$('#farsketch_content').animate({right: '+=150%'}, transition_time);
		$('#contact_content').animate({right: '+=150%'}, transition_time);
		$('#bullet'+selected).css('background', 'url(\'images/bullet_unselected.png\') no-repeat');
		selected += 1;
		$('#bullet'+selected).css('background', 'url(\'images/bullet_selected.png\') no-repeat');
		
		if (selected == 2)
			$('#arrow_left').css('visibility','visible');
		if (selected == 5)
			$('#arrow_right').css('visibility','hidden');
	});
	
	$('#arrow_left').click(function() {
		clouddirection = '+';
		cloud_speed = 90;
		setTimeout(function(){
			cloud_speed = 0.25;
			clouddirection = '-';
		}, 125);
		$('#download_content').animate({right: '-=150%'}, transition_time);
		$('#classic_content').animate({right: '-=150%'}, transition_time);
		$('#king_of_the_hill_content').animate({right: '-=150%'}, transition_time);
		$('#farsketch_content').animate({right: '-=150%'}, transition_time);
		$('#contact_content').animate({right: '-=150%'}, transition_time);
		$('#bullet'+selected).css('background', 'url(\'images/bullet_unselected.png\') no-repeat');
		selected -= 1;
		$('#bullet'+selected).css('background', 'url(\'images/bullet_selected.png\') no-repeat');
		
		if (selected == 4)
			$('#arrow_right').css('visibility','visible');
		if (selected == 1)
			$('#arrow_left').css('visibility','hidden');
	});
});