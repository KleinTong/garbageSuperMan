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
		$("#path").animate({path : new $.path.bezier(bezier_params)},3000);
		console.log('one');
	}, false);

	var bezier_params = {
	    start: { 
	      x: 230, 
	      y: 450, 
	      angle: 250
	    },  
	    end: { 
	      x:540,
	      y:110, 
	      angle: 10, 
	      length: 0.33
	    }
	  }

})