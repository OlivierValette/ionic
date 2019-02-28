app.controller('PucesCtrl', function($scope, $state, monApi) {

  // define what to do after API request
  monApi.do(function(res){
    $scope.pays = res.data;
  });

  // start API request
  monApi.get('/all');

  // onClick function
  $scope.seePays = function (pays) {
    $state.go("app.puce", {idPays: pays.alpha3Code});
  };

});
