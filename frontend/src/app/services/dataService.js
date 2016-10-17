(function () {
  'use strict';

  angular.module('HomeCash.service')
      .factory('Data', dataService);

  /** @ngInject */
  function dataService($resource) {
	  return $resource('http://localhost:8080/data', {}, { 
		  query: {method:'GET', isArray:true}
	  });
  }
})();