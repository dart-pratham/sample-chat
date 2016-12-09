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
var FilterRoomComponent = (function () {
    function FilterRoomComponent() {
    }
    FilterRoomComponent.prototype.onSelect = function (usr) {
        this.chat_user = usr;
    };
    return FilterRoomComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], FilterRoomComponent.prototype, "users", void 0);
FilterRoomComponent = __decorate([
    core_1.Component({
        selector: 'filter-room',
        template: "\n    <div id = \"user-dropdown\" >\n      <user-list [users] = \"users\" (onSelected) = \"onSelect($event)\" ></user-list>\n    </div>\n    <div id = \"user-msg-list\" >\n      <user-message-list [user] = \"chat_user\"></user-message-list>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], FilterRoomComponent);
exports.FilterRoomComponent = FilterRoomComponent;
//# sourceMappingURL=Filterroom.component.js.map