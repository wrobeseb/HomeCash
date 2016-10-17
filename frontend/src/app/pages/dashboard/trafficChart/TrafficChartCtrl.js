/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('HomeCash.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl($scope, baConfig, colorHelper, Data) {

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    $scope.doughnutData = Data.query(function () {
    	var ctx = document.getElementById('chart-area').getContext('2d');
    	window.myDoughnut = new Chart(ctx).Doughnut($scope.doughnutData, {
    		segmentShowStroke: false,
    		percentageInnerCutout : 64,
    		responsive: true
    	});
    });

  }
})();