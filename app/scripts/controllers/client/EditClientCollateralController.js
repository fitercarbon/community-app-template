(function (module) {
    mifosX.controllers = _.extend(module, {
        EditClientCollateralController: function (scope, resourceFactory, routeParams, location) {

            scope.formData = {};
            scope.clientId = routeParams.id;
            scope.collateralId = routeParams.collateralId;
            scope.collateralDataRequestBody = {};
            scope.additionalCollateralDetailsEnabled = false;
            scope.additionalDetailsAddOrRemove = false;
            scope.additionalDetails = {};


            resourceFactory.clientcollateralResource.get({clientId: scope.clientId, collateralParamId: scope.collateralId}, function (data) {
               resourceFactory.clientAdditionalCollateralTemplateResource.get({clientId: scope.clientId}, function (data) {
                    scope.provinceOptions = data.provinces;
                    scope.districtOptions = data.districts;
                    scope.sectorOptions = data.sectors;
                    scope.villageOptions = data.villages;
                    scope.cellOptions = data.cells;
               });
                scope.collaterals = data;
                console.log(data);
                scope.additionalCollateralDetailsEnabled = data.additionalDetailsEnabled;
                scope.existingAdditionalDetails = data.additionalDetails;
                scope.additionalDetails = data.additionalDetails;
                scope.formData = {
                    name: data.name,
                    quantity: data.quantity,
                    total: data.total,
                    totalCollateral: data.totalCollateral
                }
                if(scope.additionalCollateralDetailsEnabled && scope.existingAdditionalDetails != null){
                    scope.additionalDetailsAddOrRemove = true;
                }
            });
            scope.createAdditionalDetails = function () {
             if(scope.additionalDetailsAddOrRemove && scope.additionalCollateralDetailsEnabled){
                scope.collateralDataRequestBody.upiNo = scope.additionalDetails.upiNo;
                scope.collateralDataRequestBody.chassisNo = scope.additionalDetails.chassisNo;
                scope.collateralDataRequestBody.collateralOwnerFirst = scope.additionalDetails.collateralOwnerFirst;
                scope.collateralDataRequestBody.idNoOfCollateralOwnerFirst = scope.additionalDetails.idNoOfCollateralOwnerFirst;
                scope.collateralDataRequestBody.collateralOwnerSecond = scope.additionalDetails.collateralOwnerSecond;
                scope.collateralDataRequestBody.idNoOfCollateralOwnerSecond = scope.additionalDetails.idNoOfCollateralOwnerSecond;
                scope.collateralDataRequestBody.worthOfCollateral = scope.additionalDetails.worthOfCollateral;
                scope.collateralDataRequestBody.provinceId = scope.additionalDetails.province != null ? scope.additionalDetails.province.id : null;
                scope.collateralDataRequestBody.districtId = scope.additionalDetails.district != null ? scope.additionalDetails.district.id : null;
                scope.collateralDataRequestBody.sectorId = scope.additionalDetails.sector != null ? scope.additionalDetails.sector.id : null;
                scope.collateralDataRequestBody.villageId = scope.additionalDetails.village != null ? scope.additionalDetails.village.id : null;
                scope.collateralDataRequestBody.cellId = scope.additionalDetails.cell != null ? scope.additionalDetails.cell.id : null;
             }
            }

            scope.addAdditionalDetails = function () {
               scope.additionalDetailsAddOrRemove =  scope.additionalDetailsAddOrRemove == true ? false : true;
               scope.additionalDetails = {};
            }

            scope.cancel = function () {
                location.path('/viewclient/' + scope.clientId);
            };

            scope.submit = function () {
                this.formData.locale = scope.optlang.code;
                scope.collateralDataRequestBody.collateralId = scope.collateralId;
                scope.collateralDataRequestBody.quantity = this.formData.quantity;
                scope.collateralDataRequestBody.locale = this.formData.locale;
                console.log(scope.additionalDetails);
                if(scope.additionalDetails != null){
                    scope.createAdditionalDetails();
                }
                resourceFactory.clientcollateralResource.update({clientId: scope.clientId, collateralParamId: scope.collateralId}, scope.collateralDataRequestBody, function (data) {
                    location.path('/viewclient/' + scope.clientId + '/viewclientcollateral/' + data.resourceId);
                });
            };

        }
    });
    mifosX.ng.application.controller('EditClientCollateralController', ['$scope', 'ResourceFactory', '$routeParams', '$location', mifosX.controllers.EditClientCollateralController]).run(function ($log) {
        $log.info("EditClientCollateralController initialized");
    });
}(mifosX.controllers || {}));
