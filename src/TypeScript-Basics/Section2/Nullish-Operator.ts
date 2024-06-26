let velocity: number | null | undefined = null;
type Ride = {
  speed: number;
};
let ride: Ride = {
  speed: velocity ?? 30,
};
console.log(ride.speed);
