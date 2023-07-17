(function (module) {
    mifosX.controllers = _.extend(module, {
        EditExpensesController: function ($scope, resourceFactory, routeParams, location) {

            $scope.formData={};
            $scope.expenses=[];
            $scope.expensesAddedDataArray = [];
            $scope.otherExpensesList = [];
            $scope.otherExpensesData = {};
            $scope.editable=false;
            clientId=routeParams.clientId;

            resourceFactory.clientExpensesTemplateResource.getOtherExpenses({clientId: clientId}, function(data) {
                        $scope.expenses=data.otherExpenses;
                        $scope.householdExpensesId=data.id
                        $scope.formData.utilitiesAmount=data.utilitiesAmount;
                        $scope.formData.rentAmount=data.rentAmount;
                        $scope.formData.schoolFessAmount=data.schoolFessAmount;
                        $scope.formData.foodExpensesAmount=data.foodExpensesAmount;
                        $scope.otherExpensesList=data.otherExpensesData
                                                   .map(item => ({id: item.otherExpense.id, description: item.otherExpense.name,
                                                       amount: item.amount
                                                        }))

                          $scope.expensesAddedDataArray=data.otherExpensesData.map(e => ({
                                                otherExpensesId:e.otherExpense.id,otherExpensesAmount:e.amount}))

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
              $scope.otherExpensesId = $scope.otherExpensesList[index].id;
              $scope.expensesAddedDataArray = $scope.expensesAddedDataArray.filter((expense) => expense.otherExpensesId != $scope.otherExpensesId);
              $scope.otherExpensesList.splice(index, 1);
                };

            $scope.save = function () {
             $scope.formData.otherExpensesList=$scope.expensesAddedDataArray
                resourceFactory.clientExpensesResource.update({clientId: clientId,householdExpensesId:$scope.householdExpensesId},$scope.formData,function (data) {
                    location.path('/viewclient/'+clientId);
                });
            };
        }


    });
    mifosX.ng.application.controller('EditExpensesController', ['$scope','ResourceFactory', '$routeParams', '$location', mifosX.controllers.EditExpensesController]).run(function ($log) {
        $log.info("EditExpensesController initialized");
    });

}
(mifosX.controllers || {}));
