(function (module) {
    mifosX.controllers = _.extend(module, {
        LoanApprovalMatrixController: function (scope, resourceFactory, location ,WizardHandler, translate, routeParams) {
            scope.formData = {};
            scope.showOrHideValue = "show";
             scope.matrixDetails = {};

            resourceFactory.getApprovalMatrixEngineTemplateResource.get({}, function (data) {
                            scope.matrixDetails = data;
                            scope.formData.currency = scope.matrixDetails.currencyOptions[0].code;
                        });


             scope.$watch('formData',function(newVal){
                scope.matrixDetails = angular.extend(scope.matrixDetails,newVal);
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
                location.path('/viewLoanApprovalMatrix/');
            };


            scope.submit = function () {
                 this.formData.locale = scope.optlang.code;
                resourceFactory.addApprovalMatrixEngineResource.save(this.formData, function (data) {
                    location.path('/viewLoanApprovalMatrix/');
                });
            };


        }
    });
    mifosX.ng.application.controller('LoanApprovalMatrixController', ['$scope', 'ResourceFactory', '$location','WizardHandler', '$translate','$routeParams', mifosX.controllers.LoanApprovalMatrixController]).run(function ($log) {
        $log.info("LoanApprovalMatrixController initialized");
    });
}(mifosX.controllers || {}));
