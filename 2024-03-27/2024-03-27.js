var Thermostat = /** @class */ (function () {
    function Thermostat(initialTemp) {
        this._tempCelsius = initialTemp;
    }
    Object.defineProperty(Thermostat.prototype, "tempCelsius", {
        get: function () {
            return this._tempCelsius;
        },
        set: function (newTemp) {
            this._tempCelsius = newTemp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thermostat.prototype, "tempFahrenheit", {
        get: function () {
            return (this._tempCelsius * 9 / 5 + 32);
        },
        set: function (newTemp) {
            this._tempCelsius = (newTemp - 32) * 5 / 9;
        },
        enumerable: false,
        configurable: true
    });
    return Thermostat;
}());
var WaterPuifier = /** @class */ (function () {
    function WaterPuifier(waterAmount) {
        this._waterAmount = waterAmount;
    }
    Object.defineProperty(WaterPuifier.prototype, "waterAmount", {
        get: function () {
            return this._waterAmount;
        },
        set: function (amount) {
            if (amount >= 0) {
                this._waterAmount = amount;
            }
            else {
                console.log("WaterAmount");
            }
        },
        enumerable: false,
        configurable: true
    });
    return WaterPuifier;
}());
