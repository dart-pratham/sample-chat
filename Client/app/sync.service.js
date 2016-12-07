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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var SyncService = (function () {
    function SyncService(http) {
        this.http = http;
    }
    SyncService.prototype.getRequest = function (req) {
        var token = localStorage.getItem("token");
        var header = new http_1.Headers({ 'Authorization': ' ' + token });
        return this.http.get(req, { headers: header }).toPromise();
    };
    SyncService.prototype.postRequest = function (req, data) {
        var token = localStorage.getItem("token");
        var header = new http_1.Headers([{ 'Content-Type': 'application/json' }, { 'Authorization': 'token ' + token }]);
        return this.http.post(req, JSON.stringify(data), { headers: header }).toPromise();
    };
    return SyncService;
}());
SyncService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SyncService);
exports.SyncService = SyncService;
//# sourceMappingURL=sync.service.js.map