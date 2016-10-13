/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('HomeCash.pages.ui', [
    'HomeCash.pages.ui.typography',
    'HomeCash.pages.ui.buttons',
    'HomeCash.pages.ui.icons',
    'HomeCash.pages.ui.modals',
    'HomeCash.pages.ui.grid',
    'HomeCash.pages.ui.alerts',
    'HomeCash.pages.ui.progressBars',
    'HomeCash.pages.ui.notifications',
    'HomeCash.pages.ui.tabs',
    'HomeCash.pages.ui.slider',
    'HomeCash.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
