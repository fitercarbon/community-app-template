(function (module) {
    mifosX.controllers = _.extend(module, {
        EditClientRecruitmentSurveyController: function (scope, resourceFactory, routeParams, location, dateFilter) {

            scope.formData = {};
            scope.clientId = routeParams.clientId;
            scope.surveyId = routeParams.surveyId;
            scope.surveyData = {};

            resourceFactory.clientRecruitmentSurveyResource.get({clientId:routeParams.clientId, surveyId:scope.surveyId, template:'true'}, function(data){
                scope.surveyData = data;
                scope.countryOptions = data.countryOptions;
                scope.cohortOptions = data.cohortOptions;
                scope.programOptions = data.programOptions;

                scope.formData = {
                    countryId: data.country.id,
                    cohortId: data.cohort.id,
                    programId: data.program.id,
                    surveyName: data.surveyName,
                    surveyLocation: data.surveyLocation,
                };

                if (data.startDate) {
                  var startDate = dateFilter(data.startDate, scope.df);
                  scope.formData.startDate = new Date(startDate);
                }
                if(data.endDate){
                  var endDate = dateFilter(data.endDate, scope.df);
                  scope.formData.endDate = new Date(endDate);
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
                resourceFactory.clientRecruitmentSurveyResource.put({clientId: scope.clientId, surveyId:scope.surveyId}, this.formData, function (data) {
                    location.path('/viewclient/' + scope.clientId);
                });
            };

        }
    });
    mifosX.ng.application.controller('EditClientRecruitmentSurveyController', ['$scope', 'ResourceFactory', '$routeParams', '$location', 'dateFilter', mifosX.controllers.EditClientRecruitmentSurveyController]).run(function ($log) {
        $log.info("EditClientRecruitmentSurveyController initialized");
    });
}(mifosX.controllers || {}));
