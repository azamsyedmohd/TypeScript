class ClassFour {
  public id: number;
  public owner: string;
  private _balance: number;
  public nickname?: string;
  constructor(id: number, owner: string, balance: number, nickname: string) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
    this.nickname = nickname;
  }
  public deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount to deposit!");
    }
    this._balance += amount;
  }
  get balance(): number {
    return this.getBalance();
  }
  set balance(amount: number) {
    this._balance = amount;
  }
  private getBalance() {
    return this._balance;
  }
}

const modi = new ClassFour(420, "Narendra Kha-ma-Kha Modi", 2000, "Chowkidaar");
console.log(modi.id);
console.log(modi.owner);
console.log(modi.nickname);
console.log(modi.balance);
console.log(modi.deposit(700));
console.log(modi);
console.log(modi.balance);
modi.balance = 5000;
console.log(modi);
