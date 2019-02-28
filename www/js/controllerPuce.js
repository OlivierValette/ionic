app.controller('PuceCtrl', function($scope, $stateParams, monApi) {

  // get route url parameters
  $scope.idPays = $stateParams.idPays;

  // define what to do after API request
  monApi.do(function(res){
    $scope.pays = res.data;
  });

  // start API request
  monApi.get('/alpha/' + $scope.idPays);

});
