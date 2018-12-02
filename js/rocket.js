
var timer = null;
var countDownNumber = 10;
var changeState = function (state) {
	document.body.className = 'body-state'+ state;
	clearInterval(timer);
	countDownNumber = 10;
	document.getElementById('countdown').innerHTML = countDownNumber;
//CountDown
	if (state == 2) {
		timer = setInterval(function () {
			countDownNumber = countDownNumber -1;
			document.getElementById('countdown').innerHTML = countDownNumber;
			if (countDownNumber <= 0) {
				changeState(3);
			}
		}, 500);

//Success or Fail
	} else if (state == 3) {
		var success = setTimeout(function ()
		{
			var randomNumber = Math.round(Math.random()*10); 
			console.log('randomNumber: ', randomNumber)
			// success
			if (randomNumber >= 4) {
				changeState(4);
			} else {
				changeState(5); //honey, you got a big storm comin
			}

		}, 2000);
	};
}

