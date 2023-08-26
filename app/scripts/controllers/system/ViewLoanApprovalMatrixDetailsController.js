(function (module) {
    mifosX.controllers = _.extend(module, {
        ViewLoanApprovalMatrixDetailsController: function (scope, resourceFactory, location ,WizardHandler, translate, routeParams) {
             scope.matrixDetails = [];
             scope.configurations = [];


            resourceFactory.getApprovalMatrixEngineTemplateResource.get({}, function (data) {
                            scope.configurations = data;
                        });
            resourceFactory.getAllApprovalMatrixDetailsEngineResource.get({approvalMatrixId: routeParams.approvalMatrixId}, function (data) {
                            scope.matrixDetails = data;
                        });

            scope.deleteLoanApprovalMatrix = function () {
                resourceFactory.deleteApprovalMatrixDetailsEngineResource.delete({approvalMatrixId:routeParams.approvalMatrixId},function (data) {
                location.path('/viewLoanApprovalMatrix/');
            });

            };

        }
    });
    mifosX.ng.application.controller('ViewLoanApprovalMatrixDetailsController', ['$scope', 'ResourceFactory', '$location','WizardHandler', '$translate','$routeParams', mifosX.controllers.ViewLoanApprovalMatrixDetailsController]).run(function ($log) {
        $log.info("ViewLoanApprovalMatrixDetailsController initialized");
    });
}(mifosX.controllers || {}));
