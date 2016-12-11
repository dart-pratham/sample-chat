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
var user_list_service_1 = require('./user-list.service');
var UserListComponent = (function () {
    function UserListComponent(userListService) {
        this.userListService = userListService;
        this.onSelected = new core_1.EventEmitter();
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.userListService.getUsers().then(function (users) { return _this.users = users; });
    };
    UserListComponent.prototype.onSelect = function (usr) {
        this.selectedUser = usr;
        this.onSelected.emit(usr);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], UserListComponent.prototype, "users", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserListComponent.prototype, "onSelected", void 0);
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            template: "\n    <ul *ngIf = \"users\">\n      <ur *ngFor= \"let user of users\" [user]= \"user\" (click) = \"onSelect(user);\"></ur>\n    </ul>\n  ",
            providers: [user_list_service_1.UserListService]
        }), 
        __metadata('design:paramtypes', [user_list_service_1.UserListService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map