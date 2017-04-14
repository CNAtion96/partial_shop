(function() {
    'use strict';
    angular
        .module('artistSearch')
        .controller('shopController',function(API,$scope) {
        	const vm = this;
			
            vm.albums = API.getAlbums('Rock');
            console.log(vm.albums);
            
            let topArtistObj = API.getTopArtist(1);
            topArtistObj.then(res=>{
                console.log(res);
                vm.topArtist = res.data.artists.artist[0].mbid;
                console.log(vm.topArtist);
                let topAlbum = API.getTopAlbum(vm.topArtist);
                topAlbum.then(res=>{
                    console.log("hI",res);
                    vm.topAlbum = res;
                })
                
            })
            vm.setAlbum = function(mbid){
                let albumId = API.saveAlbum(mbid);
                vm.albumId = localStorage.getItem('albumId');
                let album = API.getSingleAlbum(vm.albumId);
                album.then(res=>{
                    vm.album = res;
                    console.log('a',vm.album);
                    vm.albumSave = localStorage.setItem('singleAlbum', JSON.stringify(vm.album));
                })
            }

           

            let topArtists = API.getTopArtist(10);
            topArtists.then(res=> {
                vm.topArtists = res.data.artists.artist;
                vm.topAlbums = [];
                angular.forEach(vm.topArtists, function(artist) {
                    vm.artistNames = artist.mbid;
                    
                    let album = API.getTopAlbum(vm.artistNames);
                    album.then(res=>{
                        
                        vm.Album = res;
                        vm.topAlbums.push(vm.Album);
                    })
                });
            })
           
           vm.changeTab3 = function() {
                var isActive = angular.element( document.querySelector( '.linkFour' ) );
                isActive.removeClass('active');
                var makeActive = angular.element( document.querySelector( '.linkThree' ) );
                makeActive.addClass('active');
            }
            vm.changeTab4 = function() {
                var isActive = angular.element( document.querySelector( '.linkThree' ) );
                isActive.removeClass('active');
                var makeActive = angular.element( document.querySelector( '.linkFour' ) );
                makeActive.addClass('active');
            } 
            

            vm.genre = 'Pop';
            let genre = vm.genre;
                console.log(genre);
                let albumGenre = API.getAlbumByGenre(genre);
                albumGenre.then(res => {
                    vm.albumsByGenre = res;
                   // console.log('Yes?',vm.albumsByGenre);
                })
            vm.changeGenre = function() {
                let genre = vm.genre;
                console.log(genre);
                let albumGenre = API.getAlbumByGenre(genre);
                albumGenre.then(res => {
                    vm.albumsByGenre = res;
                    console.log(vm.albumsByGenre);
                })
            }
        });
})();