


(function() {
    'use strict';
    angular
        .module('artistSearch')
        .controller('singleAlbumController',function(API,$scope) {
        	const vm = this;
			
            vm.getAlbum = localStorage.getItem('singleAlbum');
            console.log('singleAlbum');
            vm.singleAlbum = JSON.parse(vm.getAlbum);
            console.log('sa',vm.singleAlbum);
        });
})();