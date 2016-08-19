"use strict";
var router_1 = require('@angular/router');
var buildCaseInput_componet_1 = require('./buildCase/buildCaseInput.componet');
var appRoutes = [
    { path: '', component: buildCaseInput_componet_1.BuildCaseInputComponent },
    { path: 'buildcaseinput', component: buildCaseInput_componet_1.BuildCaseInputComponent },
    { path: '**', component: buildCaseInput_componet_1.BuildCaseInputComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map