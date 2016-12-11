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
var AllMessageRoom = (function () {
    function AllMessageRoom() {
        this.title = "All Messages Room";
    }
    return AllMessageRoom;
}());
AllMessageRoom = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'all-message-room',
        template: "\n  <h1>{{title}}</h1>\n  <a routerLink = \"/filter\">Filter Room</a>\n  <div id=\"chatbox\">\n  <all-message-list></all-message-list>\n  </div>\n  <br><br>\n  <div>\n  <post-form></post-form>\n  </div>\n  ",
        styles: ["\n    h1,div {\n    margin-left: 25%;\n    }\n    #chatbox{\n    height: 250px;\n    width: 500px;\n    background-color: grey;\n    overflow: scroll;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [])
], AllMessageRoom);
exports.AllMessageRoom = AllMessageRoom;
//# sourceMappingURL=all-message-room.component.js.map