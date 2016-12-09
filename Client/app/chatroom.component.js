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
var core_1 = require('@angular/core');
var ChatroomComponent = (function () {
    function ChatroomComponent(messageService) {
        this.messageService = messageService;
        this.title = "Chatroom";
    }
    ChatroomComponent.prototype.getMessage = function () {
        //this.messageService.getMessage().then(messages => this.messages = messages);
    };
    ChatroomComponent.prototype.ngOnChanges = function () {
        this.getMessage();
    };
    ChatroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ws = new WebSocket("ws://127.0.0.1:8000/ws/chatchannel?subscribe-broadcast");
        this.ws.onmessage = function (event) {
            console.log("received " + event.data);
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
        console.log(this);
        this.getMessage();
    };
    ;
    return ChatroomComponent;
}());
exports.ChatroomComponent = ChatroomComponent;
var AllMessageListComponent = (function (_super) {
    __extends(AllMessageListComponent, _super);
    function AllMessageListComponent() {
        _super.apply(this, arguments);
    }
    AllMessageListComponent.prototype.getMessage = function () {
        var _this = this;
        this.messageService.getMessage().then(function (messages) { return _this.messages = messages; });
    };
    AllMessageListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'all-message-list',
            template: "\n  <message-list [messages]=\"messages\"></message-list>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AllMessageListComponent);
    return AllMessageListComponent;
}(ChatroomComponent));
exports.AllMessageListComponent = AllMessageListComponent;
var UserMessageListComponent = (function (_super) {
    __extends(UserMessageListComponent, _super);
    function UserMessageListComponent() {
        _super.apply(this, arguments);
    }
    UserMessageListComponent.prototype.getMessage = function () {
        var _this = this;
        this.messageService.getUserMessage(this.user.id).then(function (messages) { return _this.messages = messages; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UserMessageListComponent.prototype, "user", void 0);
    UserMessageListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-message-list',
            template: "\n  <message-list [messages]=\"messages\"></message-list>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], UserMessageListComponent);
    return UserMessageListComponent;
}(ChatroomComponent));
exports.UserMessageListComponent = UserMessageListComponent;
//# sourceMappingURL=chatroom.component.js.map