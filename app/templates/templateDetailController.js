(function () {
    'use strict';

    angular.module('myApp.templates')
        .controller('TemplateDetailController',TemplateDetailController);

    function TemplateDetailController($http,$filter, $routeParams) {
        var tdc  = this;
        var templateId = $routeParams.templateId;
        $http.get('json/templates.json').then(function (response) {
                tdc.template = $filter('filter')(response.data,function (d) {
                   return d.id == templateId;
                })[0];
              tdc.mainImage = tdc.template.images[0].name;
            });

        tdc.setImage = function (image) {
            tdc.mainImage = image.name;
        }
    }
})();