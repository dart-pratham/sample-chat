//function applyMixins(derivedCtor: any, baseCtors: any[]) {
//baseCtors.forEach(baseCtor => {
//Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//derivedCtor.prototype[name] = baseCtor.prototype[name];
//});
//});
//}
"use strict";
function Mixin(baseCtors) {
    return function (derivedCtor) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    };
}
exports.Mixin = Mixin;
var AllMessages = (function () {
    function AllMessages() {
    }
    AllMessages.prototype.show = function () {
        alert("Show all messages");
    };
    return AllMessages;
}());
exports.AllMessages = AllMessages;
var FilterMessages = (function () {
    function FilterMessages() {
    }
    FilterMessages.prototype.filter = function () {
        alert("Filter Messages");
    };
    return FilterMessages;
}());
exports.FilterMessages = FilterMessages;
//# sourceMappingURL=generic-message.js.map