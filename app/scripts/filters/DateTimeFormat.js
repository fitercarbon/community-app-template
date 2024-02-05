(function (module) {
    mifosX.filters = _.extend(module, {
        DateTimeFormat: function (dateFilter, localStorageService) {
            return function (input) {
                if (input) {
                    // SAFARI is Bad We fix it Issue #3196
                    // This fix affected transaction
                    //remove = input.toString().split(",");
                    //var tDate = new Date(remove[0], remove[1]-1, remove[2]);
                    //return dateFilter(tDate, localStorageService.getFromLocalStorage('dateformat'));

                    var value = input.toString().split(",");
                    var tDate = new Date(value[0], value[1]-1, value[2], value[3], value[4], value[5]);
                    return dateFilter(tDate, 'dd MMMM yyyy HH:mm:ss');
                }
                return '';
            }
        }
    });
    mifosX.ng.application.filter('DateTimeFormat', ['dateFilter', 'localStorageService', mifosX.filters.DateTimeFormat]).run(function ($log) {
        $log.info("DateTimeFormat filter initialized");
    });
}(mifosX.filters || {}));
