class AccountOne {
  id: number;
  owner: string;
  balance: number;
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount to deposit!");
    }
    this.balance += amount;
  }
}

const accountObject = new AccountOne(1, "Mosh hamedani", 0);
console.log(accountObject.id);
console.log(accountObject.owner);
console.log(accountObject.balance);
// typeof any object created through class.
console.log(typeof accountObject); // object
//object_name instance of class_name
console.log(accountObject instanceof AccountOne);
console.log(accountObject.deposit(100));
