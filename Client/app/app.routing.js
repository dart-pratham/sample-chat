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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var login_component_1 = require('./login.component');
var Filterroom_component_1 = require('./Filterroom.component');
var all_message_room_component_1 = require('./all-message-room.component');
var task_component_1 = require('./task.component');
var auth_guard_service_1 = require('./auth-guard.service');
var login_guard_service_1 = require('./login-guard.service');
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'chat', canActivate: [auth_guard_service_1.AuthGuard], component: all_message_room_component_1.AllMessageRoom },
    { path: 'task', canActivate: [auth_guard_service_1.AuthGuard], component: task_component_1.TaskComponent },
    { path: 'login', canActivate: [login_guard_service_1.LoginGuard], component: login_component_1.LoginComponent },
    { path: 'filter', canActivate: [auth_guard_service_1.AuthGuard], component: Filterroom_component_1.FilterRoomComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map