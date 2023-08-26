(function (module) {
    mifosX.controllers = _.extend(module, {
        UpdateLoanApprovalMatrixController: function (scope, resourceFactory, location ,WizardHandler, translate, routeParams) {
            scope.formData = {};
            scope.showOrHideValue = "show";
             scope.matrixDetails = {};

            resourceFactory.getApprovalMatrixEngineTemplateResource.get({}, function (data) {
                            scope.matrixDetails = data;
                        });

            resourceFactory.getAllApprovalMatrixDetailsEngineResource.get({approvalMatrixId: routeParams.approvalMatrixId}, function (data) {
                            scope.formData = {
                            currency: data.currencyData.code,
                            levelOneUnsecuredFirstCycleMaxAmount: data.levelOneUnsecuredFirstCycleMaxAmount,
                            levelOneUnsecuredFirstCycleMinTerm: data.levelOneUnsecuredFirstCycleMinTerm,
                            levelOneUnsecuredFirstCycleMaxTerm: data.levelOneUnsecuredFirstCycleMaxTerm,

                            levelOneUnsecuredSecondCycleMaxAmount: data.levelOneUnsecuredSecondCycleMaxAmount,
                            levelOneUnsecuredSecondCycleMinTerm: data.levelOneUnsecuredSecondCycleMinTerm,
                            levelOneUnsecuredSecondCycleMaxTerm: data.levelOneUnsecuredSecondCycleMaxTerm,

                            levelOneSecuredFirstCycleMaxAmount: data.levelOneSecuredFirstCycleMaxAmount,
                            levelOneSecuredFirstCycleMinTerm: data.levelOneSecuredFirstCycleMinTerm,
                            levelOneSecuredFirstCycleMaxTerm: data.levelOneSecuredFirstCycleMaxTerm,

                            levelOneSecuredSecondCycleMaxAmount: data.levelOneSecuredSecondCycleMaxAmount,
                            levelOneSecuredSecondCycleMinTerm: data.levelOneSecuredSecondCycleMinTerm,
                            levelOneSecuredSecondCycleMaxTerm: data.levelOneSecuredSecondCycleMaxTerm,

                            levelTwoUnsecuredFirstCycleMaxAmount: data.levelTwoUnsecuredFirstCycleMaxAmount,
                            levelTwoUnsecuredFirstCycleMinTerm: data.levelTwoUnsecuredFirstCycleMinTerm,
                            levelTwoUnsecuredFirstCycleMaxTerm: data.levelTwoUnsecuredFirstCycleMaxTerm,

                            levelTwoUnsecuredSecondCycleMaxAmount: data.levelTwoUnsecuredSecondCycleMaxAmount,
                            levelTwoUnsecuredSecondCycleMinTerm: data.levelTwoUnsecuredSecondCycleMinTerm,
                            levelTwoUnsecuredSecondCycleMaxTerm: data.levelTwoUnsecuredSecondCycleMaxTerm,

                            levelTwoSecuredFirstCycleMaxAmount: data.levelTwoSecuredFirstCycleMaxAmount,
                            levelTwoSecuredFirstCycleMinTerm: data.levelTwoSecuredFirstCycleMinTerm,
                            levelTwoSecuredFirstCycleMaxTerm: data.levelTwoSecuredFirstCycleMaxTerm,

                            levelTwoSecuredSecondCycleMaxAmount: data.levelTwoSecuredSecondCycleMaxAmount,
                            levelTwoSecuredSecondCycleMinTerm: data.levelTwoSecuredSecondCycleMinTerm,
                            levelTwoSecuredSecondCycleMaxTerm: data.levelTwoSecuredSecondCycleMaxTerm,

                            levelThreeUnsecuredFirstCycleMaxAmount: data.levelThreeUnsecuredFirstCycleMaxAmount,
                            levelThreeUnsecuredFirstCycleMinTerm: data.levelThreeUnsecuredFirstCycleMinTerm,
                            levelThreeUnsecuredFirstCycleMaxTerm: data.levelThreeUnsecuredFirstCycleMaxTerm,

                            levelThreeUnsecuredSecondCycleMaxAmount: data.levelThreeUnsecuredSecondCycleMaxAmount,
                            levelThreeUnsecuredSecondCycleMinTerm: data.levelThreeUnsecuredSecondCycleMinTerm,
                            levelThreeUnsecuredSecondCycleMaxTerm: data.levelThreeUnsecuredSecondCycleMaxTerm,

                            levelThreeSecuredFirstCycleMaxAmount: data.levelThreeSecuredFirstCycleMaxAmount,
                            levelThreeSecuredFirstCycleMinTerm: data.levelThreeSecuredFirstCycleMinTerm,
                            levelThreeSecuredFirstCycleMaxTerm: data.levelThreeSecuredFirstCycleMaxTerm,

                            levelThreeSecuredSecondCycleMaxAmount: data.levelThreeSecuredSecondCycleMaxAmount,
                            levelThreeSecuredSecondCycleMinTerm: data.levelThreeSecuredSecondCycleMinTerm,
                            levelThreeSecuredSecondCycleMaxTerm: data.levelThreeSecuredSecondCycleMaxTerm,

                            levelFourUnsecuredFirstCycleMaxAmount: data.levelFourUnsecuredFirstCycleMaxAmount,
                            levelFourUnsecuredFirstCycleMinTerm: data.levelFourUnsecuredFirstCycleMinTerm,
                            levelFourUnsecuredFirstCycleMaxTerm: data.levelFourUnsecuredFirstCycleMaxTerm,

                            levelFourUnsecuredSecondCycleMaxAmount: data.levelFourUnsecuredSecondCycleMaxAmount,
                            levelFourUnsecuredSecondCycleMinTerm: data.levelFourUnsecuredSecondCycleMinTerm,
                            levelFourUnsecuredSecondCycleMaxTerm: data.levelFourUnsecuredSecondCycleMaxTerm,

                            levelFourSecuredFirstCycleMaxAmount: data.levelFourSecuredFirstCycleMaxAmount,
                            levelFourSecuredFirstCycleMinTerm: data.levelFourSecuredFirstCycleMinTerm,
                            levelFourSecuredFirstCycleMaxTerm: data.levelFourSecuredFirstCycleMaxTerm,

                            levelFourSecuredSecondCycleMaxAmount: data.levelFourSecuredSecondCycleMaxAmount,
                            levelFourSecuredSecondCycleMinTerm: data.levelFourSecuredSecondCycleMinTerm,
                            levelFourSecuredSecondCycleMaxTerm: data.levelFourSecuredSecondCycleMaxTerm,

                            levelFiveUnsecuredFirstCycleMaxAmount: data.levelFiveUnsecuredFirstCycleMaxAmount,
                            levelFiveUnsecuredFirstCycleMinTerm: data.levelFiveUnsecuredFirstCycleMinTerm,
                            levelFiveUnsecuredFirstCycleMaxTerm: data.levelFiveUnsecuredFirstCycleMaxTerm,

                            levelFiveUnsecuredSecondCycleMaxAmount: data.levelFiveUnsecuredSecondCycleMaxAmount,
                            levelFiveUnsecuredSecondCycleMinTerm: data.levelFiveUnsecuredSecondCycleMinTerm,
                            levelFiveUnsecuredSecondCycleMaxTerm: data.levelFiveUnsecuredSecondCycleMaxTerm,

                            levelFiveSecuredFirstCycleMaxAmount: data.levelFiveSecuredFirstCycleMaxAmount,
                            levelFiveSecuredFirstCycleMinTerm: data.levelFiveSecuredFirstCycleMinTerm,
                            levelFiveSecuredFirstCycleMaxTerm: data.levelFiveSecuredFirstCycleMaxTerm,

                            levelFiveSecuredSecondCycleMaxAmount: data.levelFiveSecuredSecondCycleMaxAmount,
                            levelFiveSecuredSecondCycleMinTerm: data.levelFiveSecuredSecondCycleMinTerm,
                            levelFiveSecuredSecondCycleMaxTerm: data.levelFiveSecuredSecondCycleMaxTerm
                            };
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
                resourceFactory.updateApprovalMatrixDetailsEngineResource.put({approvalMatrixId:routeParams.approvalMatrixId},this.formData, function (data) {
                    location.path('/viewLoanApprovalMatrix/');
                });
            };


        }
    });
    mifosX.ng.application.controller('UpdateLoanApprovalMatrixController', ['$scope', 'ResourceFactory', '$location','WizardHandler', '$translate','$routeParams', mifosX.controllers.UpdateLoanApprovalMatrixController]).run(function ($log) {
        $log.info("UpdateLoanApprovalMatrixController initialized");
    });
}(mifosX.controllers || {}));
