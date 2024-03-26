var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, skill) {
        this.name = name;
        this.skill = skill;
    }
    Person.prototype.sayHi = function () {
        console.log('hi');
    };
    return Person;
}());
var joo = new Person('형주', '달리기');
console.log(joo.name); // 형주
console.log(joo.skill); // 달리기
joo.sayHi(); // hi
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('Barking...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    Dog.prototype.woof = function (times) {
        for (var i = 0; i < times; i++) {
            console.log("Woof!");
        }
    };
    return Dog;
}(Animal));
var dog = new Dog("Rex");
dog.move(); // Barking... Rex moved 5m
dog.woof(3); // Woof! Woof! Woof!
