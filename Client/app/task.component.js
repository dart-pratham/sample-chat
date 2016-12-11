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
var task_service_1 = require("./task.service");
var ip_address_1 = require("./ip.address");
var TaskComponent = (function () {
    function TaskComponent(taskService) {
        this.taskService = taskService;
        this.title = "List of notifications";
    }
    TaskComponent.prototype.getTask = function () {
        var _this = this;
        this.taskService.getTask().then(function (tasks) { return _this.tasks = tasks; });
    };
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTask();
        this.ws = new WebSocket("ws://" + ip_address_1.IP + "/ws/notifychannel?subscribe-broadcast");
        this.ws.onmessage = function (event) {
            _this.getTask();
        };
        this.flag = false;
    };
    TaskComponent.prototype.confirm = function (id) {
        this.taskService.check(id).then(function (msg) { });
    };
    return TaskComponent;
}());
TaskComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'task',
        styles: ["\n    .change{\n    color:yellow;\n    }\n    h1{\n    margin-left:25%;\n    }\n    div{\n    left-margin:25%;\n    border: 2px;\n    }\n    "],
        templateUrl: 'task.component.html'
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map