(function (module) {
    mifosX.controllers = _.extend(module, {
        AddClientBusinessDetailController: function (scope, resourceFactory, location, dateFilter,WizardHandler, translate,routeParams) {
            scope.formData = {};
            scope.showOrHideValue = "show";
            scope.first = {};
            scope.first.businessCreationDate = new Date();
            scope.clientId = routeParams.clientId;
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
                if (scope.first.businessCreationDate) {
                    this.formData.businessCreationDate = dateFilter(scope.first.businessCreationDate, scope.df);
                }
                scope.businessDetails = angular.copy(scope.formData);
                scope.isClicked = false;



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
                location.path('/addbusinessdetail/'+scope.clientId);
            };


            scope.submit = function () {
                 this.formData.locale = scope.optlang.code;
                 this.formData.dateFormat = scope.df;

                 if (scope.first.businessCreationDate) {
                        this.formData.businessCreationDate = dateFilter(scope.first.businessCreationDate, scope.df);
                    }
                resourceFactory.clientBusinessDetailResource.save({clientId:scope.clientId},this.formData, function (data) {
                    location.path('/viewclient/'+scope.clientId);
                });
            };


        }
    });
    mifosX.ng.application.controller('AddClientBusinessDetailController', ['$scope', 'ResourceFactory', '$location', 'dateFilter','WizardHandler', '$translate','$routeParams', mifosX.controllers.AddClientBusinessDetailController]).run(function ($log) {
        $log.info("AddClientBusinessDetailController initialized");
    });
}(mifosX.controllers || {}));
