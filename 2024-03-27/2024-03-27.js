var Thermostat = /** @class */ (function () {
    function Thermostat(initialTemp) {
        this._tempCelsius = initialTemp;
    }
    Object.defineProperty(Thermostat.prototype, "tempCelsius", {
        get: function () {
            return "".concat(this._tempCelsius, "\u00B0C");
        },
        set: function (newTemp) {
            this._tempCelsius = newTemp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thermostat.prototype, "tempFahrenheit", {
        get: function () {
            return "".concat((this._tempCelsius * 9 / 5 + 32), "\u00B0F");
        },
        set: function (newTemp) {
            this._tempCelsius = (newTemp - 32) * 5 / 9;
        },
        enumerable: false,
        configurable: true
    });
    return Thermostat;
}());
