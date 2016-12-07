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
require('rxjs/add/operator/toPromise');
var sync_service_1 = require('./sync.service');
var MessageService = (function () {
    function MessageService(http, sync) {
        this.http = http;
        this.sync = sync;
        this.ChatUrl = 'http://192.168.2.115:8000/';
        this.PostUrl = 'http://192.168.2.115:8000/post/';
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
    MessageService.prototype.add = function (name) {
        return this.sync.postRequest(this.PostUrl, { text: name })
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, sync_service_1.SyncService])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map