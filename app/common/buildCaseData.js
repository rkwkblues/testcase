"use strict";
var BuildCaseData = (function () {
    function BuildCaseData() {
    }
    BuildCaseData.prototype.createDb = function () {
        var test = [
            { buildName: "테스트공사", buildSelect: "공사구분", buildArea: "공사면적", buildLocation: "공사지역", buildCost: "시공비용", buildContent: "공사내용", buildImage: "공사사진" }
        ];
        return { test: test };
    };
    return BuildCaseData;
}());
exports.BuildCaseData = BuildCaseData;
//# sourceMappingURL=buildCaseData.js.map