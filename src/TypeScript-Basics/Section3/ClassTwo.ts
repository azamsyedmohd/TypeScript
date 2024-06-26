class AccountTwo {
  readonly id: number;
  owner: string;
  private balance: number;
  nickname?: string;
  constructor(id: number, owner: string, balance: number, nickname?: string) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
    this.nickname = nickname;
  }
  private calculateTax(amount: number): number {
    return amount * 0.2;
  }
  getBalance(): number {
    return this.balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount to deposit!");
    }
    this.balance += amount + this.calculateTax(amount);
  }
}
const azam = new AccountTwo(8506, "Syed Mohd Azam", 25000);
console.log(azam);
console.log(azam.nickname);
const mohd = new AccountTwo(8507, "Syed Mohd Azam", 30000, "Azam");
console.log(mohd);
console.log(mohd.nickname);
