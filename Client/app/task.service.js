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
var sync_service_1 = require('./sync.service');
var ip_address_1 = require('./ip.address');
var TaskService = (function () {
    function TaskService(sync) {
        this.sync = sync;
        this.TaskUrl = 'http://' + ip_address_1.IP + '/get-notif/';
        this.TaskPostUrl = 'http://' + ip_address_1.IP + '/get-notif/';
    }
    TaskService.prototype.getTask = function () {
        return this.sync.getRequest(this.TaskUrl).then(function (res) {
            return res.json();
        });
    };
    TaskService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TaskService.prototype.check = function (id) {
        return this.sync.postRequest(this.TaskPostUrl, { id: id })
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [sync_service_1.SyncService])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map