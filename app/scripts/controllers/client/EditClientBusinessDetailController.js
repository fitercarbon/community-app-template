(function (module) {
    mifosX.controllers = _.extend(module, {
        EditClientBusinessDetailController: function (scope, resourceFactory, location, dateFilter,WizardHandler, translate,routeParams) {
            scope.formData = {};
            scope.showOrHideValue = "show";
            scope.first = {};
            scope.first.businessCreationDate = new Date();
            scope.clientId = routeParams.clientId;
            scope.businessDetailId = routeParams.businessDetailId;
             scope.businessDetails = {};


            resourceFactory.clientBusinessDetailTemplate.get({clientId:scope.clientId},function (data) {
                scope.clientbusinessDetails = data;
                scope.businessTypeOptions = data.businessType;
                scope.sourceOfCapitalOptions = data.sourceOfCapital;
                scope.bestMonthOptions = data.bestMonth;
                scope.worstMonthOptions = data.worstMonth;
                scope.whenLastPurchaseOptions = data.worstMonth;

                if (data.clientAccount) {
                    scope.clientName = data.clientAccount.displayName;
                }
                scope.businessDetails = angular.copy(scope.formData);
                scope.isClicked = false;



            });
            resourceFactory.clientBusinessDetailResource.get({clientId:scope.clientId,businessDetailId:scope.businessDetailId},function (data) {
                  console.log(data);

                  scope.formData = {
                    businessType: data.businessTypeId.id,
                    startingCapital: data.startingCapital,
                    externalId: data.externalId,
                    sourceOfCapital: data.sourceOfCapitalId.id,
                    totalEmployee: data.totalEmployee,
                    businessRevenue: data.businessRevenue,
                    averageMonthlyRevenue: data.averageMonthlyRevenue,
                    bestMonth: data.bestMonthId.id,
                    reasonForBestMonth: data.reasonForBestMonth,
                    worstMonth: data.worstMonthId.id,
                    reasonForWorstMonth: data.reasonForWorstMonth,
                    numberOfPurchase: data.numberOfPurchase,
                    purchaseFrequency: data.purchaseFrequency,
                    totalPurchaseLastMonth: data.totalPurchaseLastMonth,
                    whenLastPurchase: data.lastPurchase.id,
                    lastPurchaseAmount: data.lastPurchaseAmount,
                    businessAssetAmount: data.businessAsset,
                    amountAtInventory: data.amountAtInventory,
                    fixedAssetCost: data.fixedAssetCost,
                    amountAtCash: data.amountAtCash,
                    amountAtSaving: data.amountAtSaving,
                    totalInTax: data.totalInTax,
                    totalInTransport: data.totalInTransport,
                    totalInRent: data.totalInRent,
                    totalInCommunication: data.totalInCommunication,
                    otherExpense: data.otherExpense,
                    otherExpenseAmount: data.otherExpenseAmount,
                    totalUtility: data.totalUtility,
                    totalWorkerSalary: data.totalWorkerSalary,
                    totalWage: data.totalWage,
                    society: data.society
                };
               if (data.businessCreationDate) {
                      var businessCreationDate = dateFilter(data.businessCreationDate, scope.df);
                      scope.first.businessCreationDate = new Date(businessCreationDate);
                  }
            });


             scope.$watch('formData',function(newVal){
                scope.businessDetails = angular.extend(scope.businessDetails,newVal);
             },true);

             scope.formValue = function(array,model,findattr,retAttr){
                 findattr = findattr ? findattr : 'id';
                 retAttr = retAttr ? retAttr : 'value';
                 console.log(findattr,retAttr,model);
                 return _.find(array, function (obj) {
                    return obj[findattr] === model;
                 })[retAttr];
            };

            scope.goNext = function(form){
                WizardHandler.wizard().checkValid(form);
                scope.isClicked = true;
            }

            scope.cancel = function () {
                location.path('/viewclient/'+scope.clientId+'/editbusinessdetail/'+scope.businessDetailId);
            };


            scope.submit = function () {
                 this.formData.locale = scope.optlang.code;
                 this.formData.dateFormat = scope.df;

                 if (scope.first.businessCreationDate) {
                        this.formData.businessCreationDate = dateFilter(scope.first.businessCreationDate, scope.df);
                    }
                resourceFactory.clientBusinessDetailResource.put({clientId:scope.clientId,businessDetailId:scope.businessDetailId},this.formData, function (data) {
                    location.path('/viewclient/'+scope.clientId);
                });
            };


        }
    });
    mifosX.ng.application.controller('EditClientBusinessDetailController', ['$scope', 'ResourceFactory', '$location', 'dateFilter','WizardHandler', '$translate','$routeParams', mifosX.controllers.EditClientBusinessDetailController]).run(function ($log) {
        $log.info("EditClientBusinessDetailController initialized");
    });
}(mifosX.controllers || {}));
