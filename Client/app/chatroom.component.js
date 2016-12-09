"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var user_1 = require("./user");
var ip_address_1 = require("./ip.address");
var ChatroomComponent = (function () {
    function ChatroomComponent(messageService) {
        this.messageService = messageService;
        this.title = "Chatroom";
    }
    ChatroomComponent.prototype.getMessage = function () {
    };
    ChatroomComponent.prototype.ngOnChanges = function () {
        this.getMessage();
    };
    ChatroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this);
        this.ws = new WebSocket("ws://" + ip_address_1.IP + "/ws/chatchannel?subscribe-broadcast");
        this.ws.onmessage = function (event) {
            _this.getMessage();
        };
    };
    ChatroomComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.ws.onclose = function (event) {
            _this.ws = null;
            console.log("Closed");
        };
    };
    ChatroomComponent.prototype.updateChat = function () {
        this.getMessage();
    };
    ;
    return ChatroomComponent;
}());
var AllMessageListComponent = (function (_super) {
    __extends(AllMessageListComponent, _super);
    function AllMessageListComponent(messageService) {
        return _super.call(this, messageService) || this;
    }
    AllMessageListComponent.prototype.getMessage = function () {
        var _this = this;
        this.messageService.getMessage().then(function (messages) { return _this.messages = messages; });
    };
    return AllMessageListComponent;
}(ChatroomComponent));
AllMessageListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'all-message-list',
        template: "\n  <message-list [messages]=\"messages\"></message-list>\n  "
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], AllMessageListComponent);
exports.AllMessageListComponent = AllMessageListComponent;
var UserMessageListComponent = (function (_super) {
    __extends(UserMessageListComponent, _super);
    function UserMessageListComponent(messageService) {
        return _super.call(this, messageService) || this;
    }
    UserMessageListComponent.prototype.getMessage = function () {
        var _this = this;
        console.log(this);
        this.messageService.getUserMessage(this.user.id).then(function (messages) { return _this.messages = messages; });
    };
    return UserMessageListComponent;
}(ChatroomComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], UserMessageListComponent.prototype, "user", void 0);
UserMessageListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user-message-list',
        template: "\n  <message-list [messages]=\"messages\"></message-list>\n  "
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], UserMessageListComponent);
exports.UserMessageListComponent = UserMessageListComponent;
//# sourceMappingURL=chatroom.component.js.map