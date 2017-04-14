(function() {
    'use strict';
    angular
        .module('artistSearch')
        .factory('API', function($http){
			return {

				//function to save the album mbid to local storage
				saveAlbum:(mbid) => {
					localStorage.setItem('albumId',mbid);
				},

				//api call for Last.fm to get albums in a certain genre
				getAlbums:(tag) =>{
					return $http({
						type:"GET",
						url:`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=P${tag}&api_key=d49670f7c9654ddc5cecd1faca1955c6&format=json`
					})
				},

				//api call for Last.fm to get a single album
				getSingleAlbum:(mbid) =>{
					return $http({
						type:"GET",
						url:`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=d49670f7c9654ddc5cecd1faca1955c6&mbid=${mbid}&format=json`
					})
				},

				//api call to get top artist from Last.fm
				getTopArtist:(limit) => {
					return $http({
						type:"GET",
						url:`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=${limit}&api_key=d49670f7c9654ddc5cecd1faca1955c6&mbid&format=json`
					})
				},

				//api call to get the top artist's top album
				getTopAlbum:(mbid) => {
					return $http({
						type:"GET",
						url:`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&limit=1&api_key=d49670f7c9654ddc5cecd1faca1955c6&mbid=${mbid}&format=json`
					})
				},

				//api call to Last.fm to get to slbums of a genre
				getAlbumByGenre:(genre)=> {
					return $http({
						type:"GET",
						url:`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=d49670f7c9654ddc5cecd1faca1955c6&format=json`
					})
				},

				//api call to get the weather info 
				getWeather:(city)=> {
					return $http({
						type:"GET",
						url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7cf16558d759d14815306832bd7341e2&units=imperial`
					})
				}
		  	};
		});
})();


