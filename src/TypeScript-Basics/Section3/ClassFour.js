var ClassFour = /** @class */ (function () {
    function ClassFour(id, owner, balance, nickname) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
        this.nickname = nickname;
    }
    ClassFour.prototype.deposit = function (amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount to deposit!");
        }
        this._balance += amount;
    };
    Object.defineProperty(ClassFour.prototype, "balance", {
        get: function () {
            return this.getBalance();
        },
        set: function (amount) {
            this._balance = amount;
        },
        enumerable: false,
        configurable: true
    });
    ClassFour.prototype.getBalance = function () {
        return this._balance;
    };
    return ClassFour;
}());
var modi = new ClassFour(420, "Narendra Kha-ma-Kha Modi", 2000, "Chowkidaar");
console.log(modi.id);
console.log(modi.owner);
console.log(modi.nickname);
console.log(modi.balance);
console.log(modi.deposit(700));
console.log(modi);
console.log(modi.balance);
modi.balance = 5000;
console.log(modi);
