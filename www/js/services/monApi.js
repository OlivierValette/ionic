app.factory('monApi', function($http){

  let s = function(u) {
    this.url = u;
  };

  let g = function(param) {
    $http.get(this.url + param).then(this.doFunc, this.errorFunc);
  };

  let d = function(func) {
    this.doFunc = func;
  };

  let e = function(func) {
    this.errorFunc = func;
  };

  return {
    set: s,
    get: g,
    do: d,
    err: e,
  }

});
