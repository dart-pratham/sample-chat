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
var task_service_1 = require('./task.service');
var TaskComponent = (function () {
    function TaskComponent(taskService) {
        this.taskService = taskService;
    }
    TaskComponent.prototype.getTask = function () {
        var _this = this;
        this.taskService.getTask().then(function (tasks) { return _this.tasks = tasks; });
    };
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ws = new WebSocket("URL");
        this.ws.onmessage = function (event) {
            _this.getTask();
        };
        this.flag = false;
    };
    //updateTask(): void{
    //this.getTask();
    //}
    TaskComponent.prototype.confirm = function (id) {
        var _this = this;
        this.taskService.check(id).then(function (msg) {
            _this.flag = msg.approve;
            if (_this.flag === true) {
                //this.updateTask());
                _this.val = 'Confirmed';
                console.log("confirmed");
            }
            else {
                _this.val = 'Not Confirmed';
            }
        });
    };
    TaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'task',
            templateUrl: 'task.component.html'
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map