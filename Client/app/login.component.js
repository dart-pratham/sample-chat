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
var login_service_1 = require("./login.service");
var user_1 = require("./user");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.title = "Login";
        this.attempt = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
        this.flag = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.user.username, this.user.password);
        this.loginService.login(this.user.username, this.user.password).then(function (flag) {
            if (flag === true) {
                _this.message = 'Login Succesful';
                _this.attempt = true;
                _this.router.navigate(['/chat']);
            }
            else {
                _this.message = 'Login Failed!';
                _this.attempt = true;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login-page',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map