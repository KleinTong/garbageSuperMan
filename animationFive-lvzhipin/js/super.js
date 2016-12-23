$(function(){
	var AniOne = document.getElementById('supermanOne');

	AniOne.addEventListener("animationend", function(){
		// var AniTwo = document.getElementById('new');
		var AniFour = $('#trash');
		var AniFive = $('#trashCover');
		AniFour.css('opacity',1.0);
		AniFive.css('opacity',1.0);
		// var AniThree = document.getElementById('block');
		var AniThree = $('#block');
		AniThree.addClass('animation');
		AniFour.addClass('animation');
		AniFive.addClass('flashShake');

		$(".path").each(function(){
				var opa = Math.random();
				// while(opa >= 0.5){
					$(this).css('opacity',opa);
					// opa = Math.random();
				// }
				bezier_params.end.y = Math.random() * 800;
				bezier_params.end.x = Math.random() * 1000;
				$(this).animate({path : new $.path.bezier(bezier_params)},3000,function(){
					$('#tag').css('opacity',1.0);
				});
		});
	}, false);

	var last = document.getElementById('trash');

	last.addEventListener("animationend", function(){
			$('#word').css('opacity',0.8);
			$('#word').addClass('jello');
			$('#trash').css('opacity',0.5);
			$('#trashCover').css('opacity',0.5);
			$('#howTo').css('opacity',1.0);
			$('#howTo').addClass('fadeIn');
		}, false);

	var bezier_params = {
	    start: { 
	      x: 670, 
	      y: 430, 
	      angle: 270
	    },  
	    end: { 
	      x:540,
	      y:110, 
	      angle: 10, 
	      length: 0.33
	    }
	};

})