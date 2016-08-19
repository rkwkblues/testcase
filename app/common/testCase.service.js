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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var TestCaseService = (function () {
    function TestCaseService(http) {
        this.http = http;
        this.testUrl = 'app/buildCase/buildCaseTest.json'; // URL to web API
    }
    TestCaseService.prototype.getTest = function () {
        return this.http.get(this.testUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TestCaseService.prototype.addTest = function (buildName, buildSelect, buildArea, buildLocation, buildCost, buildContent, buildImage) {
        var body = JSON.stringify({ buildName: buildName, buildSelect: buildSelect, buildArea: buildArea, buildLocation: buildLocation, buildCost: buildCost, buildContent: buildContent, buildImage: buildImage });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.testUrl, body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TestCaseService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    TestCaseService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    TestCaseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TestCaseService);
    return TestCaseService;
}());
exports.TestCaseService = TestCaseService;
//# sourceMappingURL=testCase.service.js.map