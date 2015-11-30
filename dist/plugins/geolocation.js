if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var plugin_1 = require('./plugin');
var Geolocation = (function () {
    function Geolocation() {
    }
    Geolocation.getCurrentPosition = function (options) { };
    ;
    Geolocation.watchPosition = function (options) { };
    ;
    Object.defineProperty(Geolocation, "getCurrentPosition",
        __decorate([
            plugin_1.Cordova()
        ], Geolocation, "getCurrentPosition", Object.getOwnPropertyDescriptor(Geolocation, "getCurrentPosition")));
    Object.defineProperty(Geolocation, "watchPosition",
        __decorate([
            plugin_1.Cordova({
                callbackOrder: 'reverse',
                observable: true,
                clearFunction: 'clearWatch()'
            })
        ], Geolocation, "watchPosition", Object.getOwnPropertyDescriptor(Geolocation, "watchPosition")));
    Geolocation = __decorate([
        plugin_1.Plugin({
            name: 'Geolocation',
            plugin: 'cordova-plugin-geolocation',
            pluginRef: 'navigator.geolocation'
        })
    ], Geolocation);
    return Geolocation;
})();
exports.Geolocation = Geolocation;
//# sourceMappingURL=geolocation.js.map