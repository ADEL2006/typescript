class Thermostat{
    private _tempCelsius: number;
    constructor(initialTemp: number) {
        this._tempCelsius = initialTemp;
    }
    get tempCelsius(): number{
        return this._tempCelsius;
    }
    set tempCelsius(newTemp: number) {
        this._tempCelsius = newTemp;
    }
    get tempFahrenheit(): number{
        return (this._tempCelsius * 9 / 5 + 32);
    }
    set tempFahrenheit(newTemp:number){
        this._tempCelsius = (newTemp - 32) * 5 / 9;
    }
}