class ActiveRides {
  private static _activeRides: number = 0;
  start(): void {
    ActiveRides._activeRides++;
  }
  stop(): void {
    ActiveRides._activeRides--;
  }
  static get activeRides(): number {
    return ActiveRides._activeRides;
  }
}
const ride1 = new ActiveRides();
const ride2 = new ActiveRides();
ride1.start();
ride1.start();
ride2.start();
ride2.start();
console.log(ActiveRides.activeRides);
