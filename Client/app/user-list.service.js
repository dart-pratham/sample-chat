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
require("rxjs/add/operator/toPromise");
var sync_service_1 = require("./sync.service");
var ip_address_1 = require("./ip.address");
var UserListService = (function () {
    function UserListService(syncService) {
        this.syncService = syncService;
        this.getUsersUrl = 'http://' + ip_address_1.IP + '/filter/';
    }
    UserListService.prototype.getUsers = function () {
        return this.syncService.getRequest(this.getUsersUrl).then(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    return UserListService;
}());
UserListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [sync_service_1.SyncService])
], UserListService);
exports.UserListService = UserListService;
//# sourceMappingURL=user-list.service.js.map