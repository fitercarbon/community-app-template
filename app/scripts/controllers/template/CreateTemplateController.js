/*global mifosX _  CKEDITOR */
(function (module) {
    mifosX.controllers = _.extend(module, {
        CreateTemplateController: function (scope, resourceFactory, location, $rootScope) {
            scope.mappers = [];
            scope.formData = {};
            resourceFactory.templateResource.getTemplateDetails({resourceType: 'template'}, function (data) {
                scope.template = data;
                scope.advanceOption = 'false';
                scope.oneAtATime = 'true';
                scope.formData.entity = data.entities[0].id;
                scope.formData.type = data.types[0].id;
                scope.templateKeyEntity = "Client";
                scope.clientKeys();
                scope.mappers.push({
                    mappersorder: 0,
                    mapperskey: "client",
                    mappersvalue: "clients/{{clientId}}?tenantIdentifier=" + $rootScope.tenantIdentifier,
                    defaultAddIcon: 'true'
                });
            });

            scope.clientKeys = function () {
                scope.templateKeys = ["{{client.accountNumber}}",
                                        "{{client.transferToOffice}}",
                                        "{{client.status}}",
                                        "{{client.subStatus}}",
                                        "{{client.activationDate}}",
                                        "{{client.officeJoiningDate}}",
                                        "{{client.firstname}}",
                                        "{{client.middlename}}",
                                        "{{client.lastname}}",
                                        "{{client.fullname}}",
                                        "{{client.displayName}}",
                                        "{{client.mobileNo}}",
                                        "{{client.emailAddress}}",
                                        "{{client.isStaff}}",
                                        "{{client.externalId}}",
                                        "{{client.dateOfBirth}}",
                                        "{{client.gender}}",
                                        "{{client.staff}}",
                                        "{{client.accountNumberRequiresAutoGeneration}}",
                                        "{{client.closureReason}}",
                                        "{{client.closureDate}}",
                                        "{{client.rejectionReason}}",
                                        "{{client.rejectionDate}}",
                                        "{{client.rejectedBy}}",
                                        "{{client.withdrawalReason}}",
                                        "{{client.withdrawalDate}}",
                                        "{{client.withdrawnBy}}",
                                        "{{client.reactivateDate}}",
                                        "{{client.reactivatedBy}}",
                                        "{{client.closedBy}}",
                                        "{{client.submittedOnDate}}",
                                        "{{client.activatedBy}}",
                                        "{{client.savingsProductId}}",
                                        "{{client.savingsAccountId}}",
                                        "{{client.clientType}}",
                                        "{{client.clientClassification}}",
                                        "{{client.legalForm}}",
                                        "{{client.reopenedDate}}",
                                        "{{client.reopenedBy}}",
                                        "{{client.proposedTransferDate}}",
                                        "{{client.clientCollateralManagements}}"];
                scope.templateEntity = [
                    {"entityName": "Client",
                        "templateKeys": scope.templateKeys}
                ];
                CKEDITOR.instances.templateeditor.setData('');
            };

            scope.loanKeys = function () {
                CKEDITOR.instances.templateeditor.setData('');
                scope.loanProductTemplateKeys = ["{{loan.loanProduct.fund}}",
                                                "{{loan.loanProduct.transactionProcessingStrategy}}",
                                                "{{loan.loanProduct.name}}",
                                                "{{loan.loanProduct.shortName}}",
                                                "{{loan.loanProduct.description}}",
                                                "{{loan.loanProduct.charges}}",
                                                "{{loan.loanProduct.rates}}",
                                                "{{loan.loanProduct.loanProductRelatedDetail}}",
                                                "{{loan.loanProduct.loanProductMinMaxConstraints}}",
                                                "{{loan.loanProduct.accountingRule}}",
                                                "{{loan.loanProduct.includeInBorrowerCycle}}",
                                                "{{loan.loanProduct.useBorrowerCycle}}",
                                                "{{loan.loanProduct.loanProducTrancheDetails}}",
                                                "{{loan.loanProduct.startDate}}",
                                                "{{loan.loanProduct.closeDate}}",
                                                "{{loan.loanProduct.externalId}}",
                                                "{{loan.loanProduct.borrowerCycleVariations}}",
                                                "{{loan.loanProduct.overdueDaysForNPA}}",
                                                "{{loan.loanProduct.minimumDaysBetweenDisbursalAndFirstRepayment}}",
                                                "{{loan.loanProduct.productInterestRecalculationDetails}}",
                                                "{{loan.loanProduct.holdGuaranteeFunds}}",
                                                "{{loan.loanProduct.loanProductGuaranteeDetails}}",
                                                "{{loan.loanProduct.loanConfigurableAttributes}}",
                                                "{{loan.loanProduct.principalThresholdForLastInstallment}}",
                                                "{{loan.loanProduct.accountMovesOutOfNPAOnlyOnArrearsCompletion}}",
                                                "{{loan.loanProduct.canDefineInstallmentAmount}}",
                                                "{{loan.loanProduct.installmentAmountInMultiplesOf}}",
                                                "{{loan.loanProduct.isLinkedToFloatingInterestRate}}",
                                                "{{loan.loanProduct.floatingRates}}",
                                                "{{loan.loanProduct.allowVariabeInstallments}}",
                                                "{{loan.loanProduct.variableInstallmentConfig}}",
                                                "{{loan.loanProduct.syncExpectedWithDisbursementDate}}",
                                                "{{loan.loanProduct.canUseForTopup}}",
                                                "{{loan.loanProduct.fixedPrincipalPercentagePerInstallment}}",
                                                "{{loan.loanProduct.disallowExpectedDisbursements}}",
                                                "{{loan.loanProduct.allowApprovedDisbursedAmountsOverApplied}}",
                                                "{{loan.loanProduct.overAppliedCalculationType}}",
                                                "{{loan.loanProduct.overAppliedNumber}}",
                                                "{{loan.loanProduct.loanTermIncludesToppedUpLoanTerm}}",
                                                "{{loan.loanProduct.maxNumberOfLoanExtensionsAllowed}}",
                                                "{{loan.loanProduct.isAccountLevelArrearsToleranceEnable}}",
                                                "{{loan.loanProduct.charts}}",
                                                "{{loan.loanProduct.isBnplLoanProduct}}",
                                                "{{loan.loanProduct.requiresEquityContribution}}",
                                                "{{loan.loanProduct.equityContributionLoanPercentage}}",
                                                "{{loan.loanProduct.productCategory}}",
                                                "{{loan.loanProduct.productType}}",
                                                "{{loan.loanProduct.maintainInterestRateOnLoanTermExtension}}"];
                scope.loanTemplateKeys = [
                                            "{{loan.accountNumber}}",
                                            "{{loan.externalId}}",
                                            "{{loan.client}}",
                                            "{{loan.group}}",
                                            "{{loan.glim}}",
                                            "{{loan.loanType}}",
                                            "{{loan.fund}}",
                                            "{{loan.loanOfficer}}",
                                            "{{loan.loanPurpose}}",
                                            "{{loan.transactionProcessingStrategy}}",
                                            "{{loan.loanRepaymentScheduleDetail}}",
                                            "{{loan.termFrequency}}",
                                            "{{loan.termPeriodFrequencyType}}",
                                            "{{loan.loanStatus}}",
                                            "{{loan.syncDisbursementWithMeeting}}",
                                            "{{loan.submittedOnDate}}",
                                            "{{loan.rejectedOnDate}}",
                                            "{{loan.rejectedBy}}",
                                            "{{loan.withdrawnOnDate}}",
                                            "{{loan.withdrawnBy}}",
                                            "{{loan.approvedOnDate}}",
                                            "{{loan.approvedBy}}",
                                            "{{loan.expectedDisbursementDate}}",
                                            "{{loan.actualDisbursementDate}}",
                                            "{{loan.disbursedBy}}",
                                            "{{loan.closedOnDate}}",
                                            "{{loan.closedBy}}",
                                            "{{loan.writtenOffOnDate}}",
                                            "{{loan.rescheduledOnDate}}",
                                            "{{loan.rescheduledByUser}}",
                                            "{{loan.expectedMaturityDate}}",
                                            "{{loan.actualMaturityDate}}",
                                            "{{loan.expectedFirstRepaymentOnDate}}",
                                            "{{loan.interestChargedFromDate}}",
                                            "{{loan.totalOverpaid}}",
                                            "{{loan.loanCounter}}",
                                            "{{loan.loanProductCounter}}",
                                            "{{loan.charges}}",
                                            "{{loan.trancheCharges}}",
                                            "{{loan.collateral}}",
                                            "{{loan.loanCollateralManagements}}",
                                            "{{loan.loanOfficerHistory}}",
                                            "{{loan.repaymentScheduleInstallments}}",
                                            "{{loan.loanTransactions}}",
                                            "{{loan.accountNumberRequiresAutoGeneration}}",
                                            "{{loan.transactionProcessorFactory}}",
                                            "{{loan.loanLifecycleStateMachine}}",
                                            "{{loan.loanSummaryWrapper}}",
                                            "{{loan.proposedPrincipal}}",
                                            "{{loan.approvedPrincipal}}",
                                            "{{loan.netDisbursalAmount}}",
                                            "{{loan.fixedEmiAmount}}",
                                            "{{loan.maxOutstandingLoanBalance}}",
                                            "{{loan.disbursementDetails}}",
                                            "{{loan.postDatedChecks}}",
                                            "{{loan.loanTermVariations}}",
                                            "{{loan.totalRecovered}}",
                                            "{{loan.loanInterestRecalculationDetails}}",
                                            "{{loan.isNpa}}",
                                            "{{loan.accruedTill}}",
                                            "{{loan.createStandingInstructionAtDisbursement}}",
                                            "{{loan.guaranteeAmountDerived}}",
                                            "{{loan.interestRecalculatedOn}}",
                                            "{{loan.isFloatingInterestRate}}",
                                            "{{loan.interestRateDifferential}}",
                                            "{{loan.writeOffReason}}",
                                            "{{loan.loanSubStatus}}",
                                            "{{loan.isTopup}}",
                                            "{{loan.loanTopupDetails}}",
                                            "{{loan.rates}}",
                                            "{{loan.fixedPrincipalPercentagePerInstallment}}",
                                            "{{loan.loanTermIncludesToppedUpLoanTerm}}",
                                            "{{loan.isDisburseToSavingsLoan}}",
                                            "{{loan.total_extensions}}",
                                            "{{loan.isBnplLoan}}",
                                            "{{loan.requiresEquityContribution}}",
                                            "{{loan.equityContributionLoanPercentage}}",
                                            "{{loan.department}}"];
                scope.repaymentTemplateKeys = ["{{loan.repaymentSchedule.loanTermInDays}}", "{{loan.repaymentSchedule.totalPrincipalDisbursed}}",
                    "{{loan.repaymentSchedule.totalPrincipalExpected}}", "{{loan.repaymentSchedule.totalPrincipalPaid}}",
                    "{{loan.repaymentSchedule.totalInterestCharged}}", "{{loan.repaymentSchedule.totalFeeChargesCharged}}",
                    "{{loan.repaymentSchedule.totalPenaltyChargesCharged}}", "{{loan.repaymentSchedule.totalWaived}}",
                    "{{loan.repaymentSchedule.totalWrittenOff}}", "{{loan.repaymentSchedule.totalRepaymentExpected}}",
                    "{{loan.repaymentSchedule.totalRepayment}}", "{{loan.repaymentSchedule.totalPaidInAdvance}}",
                    "{{loan.repaymentSchedule.totalPaidLate}}", "{{loan.repaymentSchedule.totalOutstanding}}"];
                scope.loanSummaryTemplateKeys = ["{{loan.summary.totalPrincipalDisbursed}}",
                                                    "{{loan.summary.totalPrincipalRepaid}}",
                                                    "{{loan.summary.totalPrincipalWrittenOff}}",
                                                    "{{loan.summary.totalPrincipalOutstanding}}",
                                                    "{{loan.summary.totalInterestCharged}}",
                                                    "{{loan.summary.totalInterestRepaid}}",
                                                    "{{loan.summary.totalInterestWaived}}",
                                                    "{{loan.summary.totalInterestWrittenOff}}",
                                                    "{{loan.summary.totalInterestOutstanding}}",
                                                    "{{loan.summary.totalFeeChargesCharged}}",
                                                    "{{loan.summary.totalFeeChargesDueAtDisbursement}}",
                                                    "{{loan.summary.totalFeeChargesRepaid}}",
                                                    "{{loan.summary.totalFeeChargesWaived}}",
                                                    "{{loan.summary.totalFeeChargesWrittenOff}}",
                                                    "{{loan.summary.totalFeeChargesOutstanding}}",
                                                    "{{loan.summary.totalPenaltyChargesCharged}}",
                                                    "{{loan.summary.totalPenaltyChargesRepaid}}",
                                                    "{{loan.summary.totalPenaltyChargesWaived}}",
                                                    "{{loan.summary.totalPenaltyChargesWrittenOff}}",
                                                    "{{loan.summary.totalPenaltyChargesOutstanding}}",
                                                    "{{loan.summary.totalExpectedRepayment}}",
                                                    "{{loan.summary.totalRepayment}}",
                                                    "{{loan.summary.totalExpectedCostOfLoan}}",
                                                    "{{loan.summary.totalCostOfLoan}}",
                                                    "{{loan.summary.totalWaived}}",
                                                    "{{loan.summary.totalWrittenOff}}",
                                                    "{{loan.summary.totalOutstanding}}"];
                scope.templateEntity = [
                    {"entityName": "Loan",
                        "templateKeys": scope.loanTemplateKeys
                    },
                    {"entityName": "Repayment Schedule",
                        "templateKeys": scope.repaymentTemplateKeys
                    },
                    {"entityName": "Loan Product",
                        "templateKeys": scope.loanProductTemplateKeys
                    },
                    {"entityName": "Loan Summary",
                        "templateKeys": scope.loanSummaryTemplateKeys
                    }
                ];
            };

            scope.entityChange = function (entityId) {
                if (entityId !== 0) {
                    scope.mappers.splice(0, 1, {
                        mappersorder: 0,
                        mapperskey: "loan",
                        mappersvalue: "loans/{{loanId}}?associations=all&tenantIdentifier=" + $rootScope.tenantIdentifier,
                        defaultAddIcon: 'true'
                    });
                    scope.loanKeys();
                    scope.templateKeyEntity = "Loan";
                } else {
                    scope.templateKeyEntity = "Client";
                    scope.mappers.splice(0, 1, {
                        mappersorder: 0,
                        mapperskey: "client",
                        mappersvalue: "clients/{{clientId}}?tenantIdentifier=" + $rootScope.tenantIdentifier,
                        defaultAddIcon: 'true'
                    });
                    scope.clientKeys();
                }
            };

            scope.templateKeySelected = function (templateKey) {
                CKEDITOR.instances.templateeditor.insertText(templateKey);
            };

            scope.addMapperKeyValue = function () {
                scope.mappers.push({
                    mappersorder: scope.mappers.length,
                    mapperskey: "",
                    mappersvalue: ""
                });
            };

            scope.deleteMapperKeyValue = function (index) {
                scope.mappers.splice(index, 1);
            };

            scope.advanceOptionClick = function () {
                if (scope.advanceOption == 'false') {
                    scope.advanceOption = 'true';
                } else {
                    scope.advanceOption = 'false';
                }
            };

            scope.submit = function () {
                for (var i in scope.mappers) {
                    delete scope.mappers[i].defaultAddIcon;
                }
                this.formData.mappers = scope.mappers;
                this.formData.text = CKEDITOR.instances.templateeditor.getData();
                resourceFactory.templateResource.save(this.formData, function (data) {
                    location.path('/viewtemplate/' + data.resourceId);
                });
            };


        }
    });
    mifosX.ng.application.controller('CreateTemplateController', ['$scope', 'ResourceFactory', '$location', '$rootScope', mifosX.controllers.CreateTemplateController]).run(function ($log) {
        $log.info("CreateTemplateController initialized");
    });
}(mifosX.controllers || {}));
