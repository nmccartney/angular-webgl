// changes the url path and load the selected experiment
controllers.controller('NodeCtrl', function($scope, $rootScope, $log, AppModel, $routeParams, $location, LAYOUT){

    if(getItemById($routeParams.id)){
        $scope.appModel.currentItem = getItemById($routeParams.id);
    }else{
        $location.path('nav');
    }

    function getItemById(id){
        var currentItem = null;
        angular.forEach(AppModel.items, function(obj,i){
            if(obj.id === id){
                currentItem = obj;
            }
        })

        return currentItem;
    }


    var interfaceImg = $('#interface-img');
    var viewLoader = $('#view-loader');
    window.addEventListener( 'resize', onWindowResize, false );


    function onWindowResize() {

        viewLoader.width(interfaceImg.width());
        viewLoader.height(interfaceImg.height());

    }

    onWindowResize();

});