(function () {
    'use strict';

    angular.module('myApp.templates',['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject=['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/templates',{
                templateUrl:'templates/templates.html',
                controller:'TemplateController',
                controllerAs:'tc'
            })
            .when('/templates/:templateId',{
                templateUrl:'templates/template-details.html',
                controller:'TemplateDetailController',
                controllerAs:'tdc'
            })
    }
})();