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
var message_service_1 = require("./message.service");
var ChatroomComponent = (function () {
    function ChatroomComponent(messageService) {
        this.messageService = messageService;
        this.title = "Chatroom";
    }
    ChatroomComponent.prototype.getMessage = function () {
        var x = this;
        this.messageService.getMessage()
            .then(function (messages) { return x.messages = messages; });
    };
    ChatroomComponent.prototype.ngOnInit = function () {
        this.getMessage();
    };
    ChatroomComponent.prototype.updateMsg = function () {
        this.getMessage();
    };
    ChatroomComponent.prototype.send = function (body) {
        var _this = this;
        body = body.trim();
        if (!body) {
            return;
        }
        this.messageService.add(body).then(function (msg) { return _this.updateMsg(); });
    };
    return ChatroomComponent;
}());
ChatroomComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'chat-room',
        templateUrl: 'chatroom.component.html',
        styleUrls: ['chatroom.component.css']
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], ChatroomComponent);
exports.ChatroomComponent = ChatroomComponent;
//# sourceMappingURL=chatroom.component.js.map