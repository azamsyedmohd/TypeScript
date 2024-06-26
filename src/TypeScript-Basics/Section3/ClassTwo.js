var AccountTwo = /** @class */ (function () {
    function AccountTwo(id, owner, balance, nickname) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.nickname = nickname;
    }
    AccountTwo.prototype.deposit = function (amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount to deposit!");
        }
        this.balance += amount;
    };
    return AccountTwo;
}());
var azam = new AccountTwo(8506, "Syed Mohd Azam", 25000);
console.log(azam);
console.log(azam.nickname);
var mohd = new AccountTwo(8507, "Syed Mohd Azam", 30000, "Azam");
console.log(mohd);
console.log(mohd.nickname);
