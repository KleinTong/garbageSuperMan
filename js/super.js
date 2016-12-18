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
}, false);