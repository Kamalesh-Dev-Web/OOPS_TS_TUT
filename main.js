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
console.log("hELLO WORLD");
// Basic class
var Car = /** @class */ (function () {
    function Car(model, color, isElectric) {
        this.model = model;
        this.color = color;
        this.isElectric = isElectric;
    }
    Car.prototype.drive = function () {
        var engineIsStarted = this.startEngine();
    };
    Car.prototype.startEngine = function () {
        return true;
    };
    return Car;
}());
// ABSTRACT
var Character = /** @class */ (function () {
    function Character(name, health, speed) {
        this.name = name;
        this.speed = speed;
        this.health = health;
    }
    return Character;
}());
var Goblin = /** @class */ (function (_super) {
    __extends(Goblin, _super);
    function Goblin(name, health, speed) {
        return _super.call(this, name, health, speed) || this;
    }
    Goblin.prototype.calculatePower = function () {
        return this.health * this.speed;
    };
    Goblin.prototype.characterName = function () {
        return this.name;
    };
    return Goblin;
}(Character));
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard(name, health, speed) {
        return _super.call(this, name, health, speed) || this;
    }
    return Wizard;
}(Goblin));
var Wizzy = new Wizard("wizzy", 100, 25);
console.log(Wizzy.calculatePower());
