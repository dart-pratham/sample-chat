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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var chatroom_component_1 = require('./chatroom.component');
var all_message_room_component_1 = require('./all-message-room.component');
var messagecomponent_1 = require('./messagecomponent');
var messagelist_component_1 = require('./messagelist.component');
var login_component_1 = require('./login.component');
var task_component_1 = require('./task.component');
var post_component_1 = require('./post.component');
var app_routing_1 = require('./app.routing');
var message_service_1 = require('./message.service');
var login_service_1 = require('./login.service');
var sync_service_1 = require('./sync.service');
var task_service_1 = require('./task.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.AppRoutingModule, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, chatroom_component_1.AllMessageListComponent, chatroom_component_1.UserMessageListComponent, login_component_1.LoginComponent, messagecomponent_1.MessageComponent, messagelist_component_1.MessageListComponent, task_component_1.TaskComponent, all_message_room_component_1.AllMessageRoom, post_component_1.PostComponent],
            providers: [message_service_1.MessageService, login_service_1.LoginService, sync_service_1.SyncService, task_service_1.TaskService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map