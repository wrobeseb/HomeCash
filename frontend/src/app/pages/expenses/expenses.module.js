
(function () {
  'use strict';

  angular.module('HomeCash.pages.expenses', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('expenses', {
          url: '/expenses',
          templateUrl: 'app/pages/expenses/inputs/inputs.html',
          title: 'Expenses',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          }
        });
  }
})();
