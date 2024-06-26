var ActiveRides = /** @class */ (function () {
    function ActiveRides() {
    }
    ActiveRides.prototype.start = function () {
        ActiveRides._activeRides++;
    };
    ActiveRides.prototype.stop = function () {
        ActiveRides._activeRides--;
    };
    Object.defineProperty(ActiveRides, "activeRides", {
        get: function () {
            return ActiveRides._activeRides;
        },
        enumerable: false,
        configurable: true
    });
    ActiveRides._activeRides = 0;
    return ActiveRides;
}());
var ride1 = new ActiveRides();
var ride2 = new ActiveRides();
ride1.start();
ride1.start();
ride2.start();
ride2.start();
console.log(ActiveRides.activeRides);
