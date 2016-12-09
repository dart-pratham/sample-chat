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
var MessageService = (function () {
    function MessageService(sync) {
        this.sync = sync;
        this.ChatUrl = 'http://' + ip_address_1.IP + '/chat/';
        this.PostUrl = 'http://' + ip_address_1.IP + '/post/';
        this.filterUrl = 'http://' + ip_address_1.IP + '/filter/';
    }
    MessageService.prototype.getMessage = function () {
        return this.sync.getRequest(this.ChatUrl).then(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    MessageService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    MessageService.prototype.add = function (task, time_of_fire) {
        var time = new Date(time_of_fire);
        return this.sync.postRequest(this.PostUrl, { text: task, time_to_fire: time })
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MessageService.prototype.getUserMessage = function (userId) {
        return this.sync.getRequest(this.filterUrl + "user/" + userId + '/').then(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [sync_service_1.SyncService])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map