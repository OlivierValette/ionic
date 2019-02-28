app.controller('PucesCtrl', function($scope, $stateParams, $state, monApi) {

  $scope.i = {};
  // get route url parameters
  $scope.txtPays = $stateParams.txtPays;
  if (!$stateParams.txtPays) $scope.txtPays = 'viewAll';

  // define what to do after API request
  monApi.do(function(res){
    $scope.pays = res.data;
  });

  // start API request
  console.log($scope.txtPays);
  if ($scope.txtPays === 'viewAll') {
    monApi.get('/all');
  } else {
    monApi.get('/name/' + $scope.txtPays);
  }

  // onClick function
  $scope.seePays = function (pays) {
    $state.go("app.puce", {idPays: pays.alpha3Code});
  };

  // submit function
  $scope.submit = function () {
    $state.go("app.puces", {txtPays: $scope.i.txt});
  };

});
