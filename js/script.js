var car = {
			make: 'vw',
			type: 'polo',
			color: 'blue',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: [
			'seat 1',
			'seat 2',
			'seat 3',
			],

			turnOn: function () {
				this.isTurnedOn = true;
			},
			fly: function () {
				alert('fly');
			},

			switchCar: function (isOn) {
				console.log('turn car '+isOn)
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}
			}


		};
// changing class names
var doCoolStuff = function () {
	var currentClassName = document.getElementById('SaCool').className;
		if (currentClassName == 'cool') {
			document.getElementById('SaCool').className ='cool purple';
			} else {
				document.getElementById('SaCool').className = 'cool';
			}
}