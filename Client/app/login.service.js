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
var ip_address_1 = require('./ip.address');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.loginUrl = "http://" + ip_address_1.IP + "/get-token/";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    LoginService.prototype.login = function (username, password) {
        return this.http.post(this.loginUrl, JSON.stringify({ username: username, password: password }), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var token = res.json() && res.json().token;
            if (token) {
                localStorage.setItem('token', token);
                return true;
            }
            else {
                return false;
            }
        });
    };
    LoginService.prototype.logout = function () {
        this.token = null;
        localStorage.clear();
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map