(function (module) {
    mifosX.controllers = _.extend(module, {
        AddExpensesController: function ($scope, resourceFactory, routeParams, location) {

            $scope.formData={};
            $scope.expenses=[];
            $scope.expensesAddedDataArray = [];
             $scope.otherExpensesList = [];
            $scope.otherExpensesData = {};
            $scope.editable=false;
            clientId=routeParams.clientId;

            resourceFactory.clientExpensesTemplateResource.getOtherExpenses({clientId: clientId}, function(data) {
                          $scope.expenses=data.otherExpenses;

                            });


            $scope.routeTo=function()
            {
                location.path('/viewclient/'+clientId);
            }

            $scope.addOtherExpenses = function () {
             let addedExpense= $scope.expensesAddedDataArray.find((expense) => $scope.otherExpensesData.otherExpensesId == expense.otherExpensesId)
            if(!addedExpense && $scope.otherExpensesData.otherExpensesId && $scope.otherExpensesData.amount){
               var description=$scope.expenses.filter((expense) => $scope.otherExpensesData.otherExpensesId == expense.id)[0].name;
               $scope.otherExpensesList.push({otherExpensesId: $scope.otherExpensesData.otherExpensesId, description: description, amount: $scope.otherExpensesData.amount});
               $scope.expensesAddedDataArray.push({otherExpensesId: $scope.otherExpensesData.otherExpensesId, otherExpensesAmount: $scope.otherExpensesData.amount});
           }
            };

            $scope.deleteOtherExpenses = function (index) {
              $scope.otherExpensesId = $scope.otherExpensesList[index].otherExpensesId;
              $scope.expensesAddedDataArray = $scope.expensesAddedDataArray.filter((expense) => expense.otherExpensesId != $scope.otherExpensesId);
              $scope.otherExpensesList.splice(index, 1);
                };

            $scope.save = function () {
             $scope.formData.otherExpensesList=$scope.expensesAddedDataArray
                resourceFactory.clientExpensesResource.save({clientId: clientId},$scope.formData,function (data) {
                    location.path('/viewclient/'+clientId);
                });
            };
        }


    });
    mifosX.ng.application.controller('AddExpensesController', ['$scope','ResourceFactory', '$routeParams', '$location', mifosX.controllers.AddExpensesController]).run(function ($log) {
        $log.info("AddExpensesController initialized");
    });

}
(mifosX.controllers || {}));
