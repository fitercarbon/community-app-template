(function (module) {
    mifosX.controllers = _.extend(module, {
        ViewLoanApprovalMatrixController: function (scope, resourceFactory, location ,WizardHandler, translate, routeParams) {
             scope.matrixDetails = [];
             scope.configurations = [];

            resourceFactory.getApprovalMatrixEngineTemplateResource.get({}, function (data) {
                            scope.configurations = data;
                        });
            resourceFactory.getAllApprovalMatrixEngineResource.getAll({}, function (data) {
                scope.matrixDetails = data;
            });
            scope.routeTo=function(id)
            {
                location.path('/viewLoanApprovalMatrixDetails/'+ id);
            }

        }
    });
    mifosX.ng.application.controller('ViewLoanApprovalMatrixController', ['$scope', 'ResourceFactory', '$location','WizardHandler', '$translate','$routeParams', mifosX.controllers.ViewLoanApprovalMatrixController]).run(function ($log) {
        $log.info("ViewLoanApprovalMatrixController initialized");
    });
}(mifosX.controllers || {}));
