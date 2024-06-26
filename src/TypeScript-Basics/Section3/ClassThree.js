var ClassThree = /** @class */ (function () {
    //   public readonly id: number;
    //   public owner: string;
    //   private balance: number;
    //   public nickname?: string;
    function ClassThree(id, owner, balance, nickname) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.nickname = nickname;
        // this.id = id;
        // this.owner = owner;
        // this.balance = balance;
        // this.nickname = nickname;
    }
    ClassThree.prototype.deposit = function (amount) {
        if (amount <= 0) {
            throw new Error("Invalid money to deposit!");
        }
        this.balance += amount;
    };
    return ClassThree;
}());
var syed = new ClassThree(100, "Google", 45000, "Googo!");
console.log(syed);
console.log(syed.id);
console.log(syed.owner);
console.log(syed.nickname);
console.log(syed.deposit(500));
console.log(syed);
