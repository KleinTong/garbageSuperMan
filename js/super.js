$(function(){
	var AniOne = document.getElementById('old');

	// AniOne.onanimationend = function(){
	// 	var AniTwo = document.getElementById('new');
	// 	AniTwo.style.display = 'block';
	// }

	AniOne.addEventListener("animationend", function(){
		var AniTwo = document.getElementById('new');
		var AniFour = $('#trash');
		var AniFive = $('#trashCover');
		AniOne.style.opacity = 0.0;
		AniTwo.style.opacity= 1.0;
		// var AniThree = document.getElementById('block');
		var AniThree = $('#block');
		AniThree.addClass('animation');
		AniFour.addClass('animation');
		AniFive.addClass('flashShake');

		$('#tag').css('opacity',1.0);

		$(".path").each(function(){
				bezier_params.end.y = Math.floor(Math.random() * 800);
				bezier_params.end.x = Math.floor(Math.random() * 1000);
				$(this).animate({path : new $.path.bezier(bezier_params)},2000);
				console.log("heih");
				});
	}, false);

	var bezier_params = {
	    start: { 
	      x: 270, 
	      y: 480, 
	      angle: 270
	    },  
	    end: { 
	      x:540,
	      y:110, 
	      angle: 10, 
	      length: 0.33
	    }
	  }

})