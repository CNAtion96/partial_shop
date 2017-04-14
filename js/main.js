(function() {
    'use strict';

    angular
    .module('artistSearch', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        
        $urlRouterProvider.otherwise('/')
    	$stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../partials/home.html',
                controller: 'shopController',
                controllerAs: 'vm'    
            })
            .state('singleAlbum', {
                url: '/album',
                templateUrl: '../partials/singleAlbum.html',
                controller: 'singleAlbumController',
                controllerAs: 'vm'
            })
            .state('albumShop', {
                url: '/shop',
                templateUrl: '../partials/albumShop.html',
                controller: 'shopController',
                controllerAs: 'vm'
            })
    });
})();