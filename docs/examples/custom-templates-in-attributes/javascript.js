angular
  .module('mwl.calendar.docs')
  .controller('CustomTemplatesCtrl', function($scope, moment, calendarConfig) {
    var vm = this;

    vm.events = [];
    vm.calendarView = 'month';
    vm.viewDate = moment().startOf('month').toDate();
  });
