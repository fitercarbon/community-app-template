(function (module) {
    mifosX.controllers = _.extend(module, {
        ClientRecruitmentSurveyController: function (scope, resourceFactory, routeParams, location, dateFilter) {

            scope.formData = {};
            scope.clientId = routeParams.clientId;
            scope.surveyData = {};
            scope.exists= false;

            resourceFactory.clientRecruitmentSurveyTemplateResource.get({clientId:routeParams.clientId}, function(data){
                scope.countryOptions = data.countryOptions;
                scope.cohortOptions = data.cohortOptions;
                scope.programOptions = data.programOptions;
            });

            resourceFactory.recruitmentSurveyResource.getAll({clientId:routeParams.clientId}, function(data){
                scope.surveyData = data[0];
                if(scope.surveyData){
                 scope.exists = true;
                }

            });

            scope.cancel = function () {
                location.path('/viewclient/' + scope.clientId);
            };

            scope.submit = function () {
                this.formData.locale = scope.optlang.code;
                this.formData.dateFormat = scope.df;
                this.formData.startDate = dateFilter(scope.formData.startDate, scope.df);
                this.formData.endDate = dateFilter(scope.formData.endDate, scope.df);

                resourceFactory.clientRecruitmentSurveyResource.save({clientId: scope.clientId}, this.formData, function (data) {
                    location.path('/viewclient/' + scope.clientId);
                });
            };

        }
    });
    mifosX.ng.application.controller('ClientRecruitmentSurveyController', ['$scope', 'ResourceFactory', '$routeParams', '$location', 'dateFilter', mifosX.controllers.ClientRecruitmentSurveyController]).run(function ($log) {
        $log.info("ClientRecruitmentSurveyController initialized");
    });
}(mifosX.controllers || {}));
