"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Promise Version
var core_1 = require('@angular/core');
var testCase_service_1 = require('../common/testCase.service');
var BuildCaseInputComponent = (function () {
    function BuildCaseInputComponent(testService) {
        this.testService = testService;
        this.mode = 'Promise';
    }
    BuildCaseInputComponent.prototype.ngOnInit = function () { this.getTest(); };
    BuildCaseInputComponent.prototype.getTest = function () {
        var _this = this;
        this.testService.getTest()
            .then(function (test) { return _this.test = test; }, function (error) { return _this.errorMessage = error; });
    };
    BuildCaseInputComponent = __decorate([
        core_1.Component({
            selector: 'hero-list',
            templateUrl: 'app/buildCase/buildCaseInput.component.html',
            providers: [testCase_service_1.TestCaseService]
        }), 
        __metadata('design:paramtypes', [testCase_service_1.TestCaseService])
    ], BuildCaseInputComponent);
    return BuildCaseInputComponent;
}());
exports.BuildCaseInputComponent = BuildCaseInputComponent;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
//# sourceMappingURL=buildCaseInput.componet.js.map