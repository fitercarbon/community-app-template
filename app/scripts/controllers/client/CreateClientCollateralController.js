(function (module) {
    mifosX.controllers = _.extend(module, {
        CreateClientCollateralController: function (scope, resourceFactory, routeParams, location) {

            scope.formData = {};
            scope.clientId = routeParams.id;
            scope.collateralData = {};
            scope.disable = true;
            scope.collateralDataRequestBody = {};
            scope.collateralId;
            scope.additionalCollateralDetailsEnabled = false;
            scope.additionalDetailsAddOrRemove = false;
            scope.additionalDetails = {};

            scope.updateValues = function () {
                scope.formData.quantity = scope.formData.quantity * 1.0;
                scope.formData.total = scope.formData.quantity * scope.formData.basePrice;
                scope.formData.totalCollateral = scope.formData.total * scope.formData.pctToBase/100.00;
            }

            scope.collateralProductChange = function (collateralId) {
                resourceFactory.collateralResource.get({collateralId: collateralId}, function (data) {
                    scope.collateralData = data;
                    scope.collateralId = collateralId;
                    scope.formData.name = scope.collateralData.name;
                    scope.formData.type = scope.collateralData.quality;
                    scope.formData.basePrice = scope.collateralData.basePrice;
                    scope.formData.pctToBase = scope.collateralData.pctToBase;
                    scope.formData.unitType = scope.collateralData.unitType;
                    scope.formData.collateralId = collateralId;
                    scope.formData.quantity = 0.0;
                    scope.formData.total = 0.0;
                    scope.formData.totalCollateral = 0.0
                    scope.disabled = false;
                });

            }

            resourceFactory.collateralResource.getAllCollaterals(function (data) {
                scope.collaterals = data;
            });
            resourceFactory.clientAdditionalCollateralTemplateResource.get({clientId: scope.clientId}, function (data) {
                scope.provinceOptions = data.provinces;
                scope.districtOptions = data.districts;
                scope.sectorOptions = data.sectors;
                scope.villageOptions = data.villages;
                scope.cellOptions = data.cells;
            });
            resourceFactory.configurationResourceByName.get({name:'Enable-Client-Collateral-Addition_Details'},function (data) {
                scope.additionalCollateralDetailsEnabled = data.enabled;
            });

            scope.addAdditionalDetails = function () {
               scope.additionalDetailsAddOrRemove =  scope.additionalDetailsAddOrRemove == true ? false : true;
               scope.additionalDetails = {};
            }
            scope.createAdditionalDetails = function () {
             if(scope.additionalDetailsAddOrRemove && scope.additionalCollateralDetailsEnabled){
                this.formData.upiNo = scope.additionalDetails.upiNo;
                this.formData.chassisNo = scope.additionalDetails.chassisNo;
                this.formData.collateralOwnerFirst = scope.additionalDetails.collateralOwnerFirst;
                this.formData.idNoOfCollateralOwnerFirst = scope.additionalDetails.idNoOfCollateralOwnerFirst;
                this.formData.collateralOwnerSecond = scope.additionalDetails.collateralOwnerSecond;
                this.formData.idNoOfCollateralOwnerSecond = scope.additionalDetails.idNoOfCollateralOwnerSecond;
                this.formData.worthOfCollateral = scope.additionalDetails.worthOfCollateral;
                this.formData.provinceId = scope.additionalDetails.provinceId;
                this.formData.districtId = scope.additionalDetails.districtId;
                this.formData.sectorId = scope.additionalDetails.sectorId;
                this.formData.villageId = scope.additionalDetails.villageId;
                this.formData.cellId = scope.additionalDetails.cellId;
             }
            }

            scope.cancel = function () {
                location.path('/viewclient/' + scope.clientId);
            };

            scope.submit = function () {
                this.formData.locale = scope.optlang.code;

                delete this.formData.name;
                delete this.formData.pctToBase;
                delete this.formData.basePrice;
                delete this.formData.type;
                delete this.formData.unitType;
                delete this.formData.total;
                delete this.formData.totalCollateral;
                scope.createAdditionalDetails();

                resourceFactory.clientcollateralResource.save({clientId: scope.clientId}, this.formData, function (data) {
                    location.path('/viewclient/' + scope.clientId + '/viewclientcollateral/' + data.resourceId);
                });
            };

        }
    });
    mifosX.ng.application.controller('CreateClientCollateralController', ['$scope', 'ResourceFactory', '$routeParams', '$location', mifosX.controllers.CreateClientCollateralController]).run(function ($log) {
        $log.info("CreateClientCollateralController initialized");
    });
}(mifosX.controllers || {}));
