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
var message_service_1 = require('./message.service');
var PostComponent = (function () {
    function PostComponent(messageService) {
        this.messageService = messageService;
    }
    PostComponent.prototype.send = function (body, time) {
        var _this = this;
        body = body.trim();
        if (!body) {
            return;
        }
        this.messageService.add(body, time).then(function (msg) { return _this.getMessage(); });
    };
    PostComponent.prototype.getMessage = function () {
        var _this = this;
        this.messageService.getMessage().then(function (messages) { return _this.messages = messages; });
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: 'post-form',
            template: "\n  <div>\n  <label>Your msg:</label>\n  <input #messageBody placeholder=\"Your message\">\n  <input type = \"datetime-local\" #timeOfFire >\n  <button (click)=\"send(messageBody.value,timeOfFire.value); messageBody.value='';\">Send</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map