class ClassThree {
  //   public readonly id: number;
  //   public owner: string;
  //   private balance: number;
  //   public nickname?: string;
  constructor(
    public readonly id: number,
    public owner: string,
    private balance: number,
    public nickname?: string
  ) {
    // this.id = id;
    // this.owner = owner;
    // this.balance = balance;
    // this.nickname = nickname;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid money to deposit!");
    }
    this.balance += amount;
  }
}

const syed = new ClassThree(100, "Google", 45000, "Googo!");
console.log(syed);
console.log(syed.id);
console.log(syed.owner);
console.log(syed.nickname);
console.log(syed.deposit(500));
