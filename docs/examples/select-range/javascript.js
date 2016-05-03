angular
  .module('mwl.calendar.docs')
  .controller('SelectRangeCtrl', function(moment, calendarConfig) {

    var vm = this;

    vm.events = [];
    vm.calendarView = 'day';
    vm.viewDate = moment().startOf('month').toDate();
    vm.isCellOpen = true;

    calendarConfig.selectRangeEnabled = true;

    vm.rangeSelected = function(startDate, endDate) {
      vm.firstDateClicked = startDate;
      vm.lastDateClicked = endDate;
    };

  });
