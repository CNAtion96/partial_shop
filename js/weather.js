(function() {
    'use strict';

    angular
        .module('artistSearch')
		.directive('weather', function (API) {

		  return {
		    restrict: 'E', // Restrict to Element only
		    templateUrl: '../partials/weather.html',
    		 link: function ( vm, element, attrs ){

		      	let weather= API.getWeather(attrs.city);

		    	weather.then(res=>{
                    console.log('this',res);
		    		vm.weather = res.data;
		    	})
		    },

		  };
		});
})();

