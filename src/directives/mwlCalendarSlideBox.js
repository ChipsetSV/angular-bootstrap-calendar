'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .controller('MwlCalendarSlideBoxCtrl', function($sce, $scope, $timeout, calendarConfig) {

    var vm = this;
    vm.$sce = $sce;
    vm.calendarConfig = calendarConfig;

	vm.getTemplateUrl = function() {
		if (vm.slideBoxTemplate) {
			return vm.slideBoxTemplate;
		} else {
			return calendarConfig.templates.calendarSlideBox;
		}
    };

    vm.isCollapsed = true;
    $scope.$watch('vm.isOpen', function(isOpen) {
      //events must be populated first to set the element height before animation will work
      $timeout(function() {
        vm.isCollapsed = !isOpen;
      });
    });

  })
  .directive('mwlCalendarSlideBox', function() {

    return {
      restrict: 'E',
      template: '<ng-include src="vm.getTemplateUrl()"/>',
      replace: true,
      controller: 'MwlCalendarSlideBoxCtrl as vm',
      require: ['^?mwlCalendarMonth', '^?mwlCalendarYear'],
      link: function(scope, elm, attrs, ctrls) {
        scope.isMonthView = !!ctrls[0];
        scope.isYearView = !!ctrls[1];
      },
      scope: {
        slideBoxTemplate: '=?',
        isOpen: '=',
        events: '=',
        onEventClick: '=',
        editEventHtml: '=',
        onEditEventClick: '=',
        deleteEventHtml: '=',
        onDeleteEventClick: '='
      },
      bindToController: true
    };

  });
