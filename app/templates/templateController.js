(function () {
    angular.module('myApp.templates')
        .controller('TemplateController',TemplateController);

    
        function TemplateController($http) {
            var tc = this;
            $http.get('json/templates.json').then(function (response) {
                console.log(response.data);

                tc.templates = response.data;
            });
        }
})();