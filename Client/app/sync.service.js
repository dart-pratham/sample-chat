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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
require('rxjs/add/operator/toPromise');
var SyncService = (function () {
    function SyncService(http, router) {
        this.http = http;
        this.router = router;
    }
    SyncService.prototype.getRequest = function (req) {
        var token = localStorage.getItem("token");
        var header = new http_1.Headers({ 'Authorization': 'token ' + token });
        var x = this;
        return this.http.get(req, { headers: header }).toPromise().catch(function (resp) {
            console.log(resp, 1);
            if (resp.status === 401) {
                console.log('401 error');
                localStorage.removeItem('token');
                x.router.navigate(['/login']);
            }
            return resp;
        });
    };
    SyncService.prototype.postRequest = function (req, data) {
        var token = localStorage.getItem("token");
        var header = new http_1.Headers();
        header.append("Content-Type", "application/json");
        header.append("Authorization", "token " + token);
        var x = this;
        return this.http.post(req, JSON.stringify(data), { headers: header }).toPromise().catch(function (resp) {
            if (resp.status === 401) {
                console.log('401 error');
                localStorage.removeItem('token');
                x.router.navigate(['/login']);
            }
            return resp;
        });
    };
    SyncService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], SyncService);
    return SyncService;
}());
exports.SyncService = SyncService;
//# sourceMappingURL=sync.service.js.map