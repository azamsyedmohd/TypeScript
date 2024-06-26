var Account = /** @class */ (function () {
    function Account(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount to deposit!");
        }
        this.balance += amount;
    };
    return Account;
}());
var accountObject = new Account(1, "Mosh hamedani", 0);
console.log(accountObject.id);
console.log(accountObject.owner);
console.log(accountObject.balance);
// typeof any object created through class.
console.log(typeof accountObject); // object
//object_name instance of class_name
console.log(accountObject instanceof Account);
console.log(accountObject.deposit(100));
