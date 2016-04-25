'use strict';

eventsApp.controller('EventController', function EventController($scope) {

	$scope.event = {
		name: 'Angular Boot Camp',
		date: '4/24/2016',
		time: '7:06 pm',
		location: {
			address: 'Google headquarters',
			city: 'Mountain View',
			province: 'CA'
		},
		imageUrl: '/img/angularjs-logo.png'
	}
});