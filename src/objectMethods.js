// Initialize an object with properties and methods
const job = {
  position: "cashier",
  type: "hourly",
  isAvailable: true,
  showDetails() {
    const accepting = this.isAvailable
      ? "is accepting applications"
      : "is not currently accepting applications";

    console.log(
      `The ${this.position} position is ${this.type} and ${accepting}.`
    );
  },
};

console.log(Object.getPrototypeOf(job));

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();

console.log("🚀 ~ file: objectMethods.js ~ line 22 ~ barista", barista);

job.showDetails();

// Create new object using merge to the right one
const swiggyJob = Object.assign(job, { position: "swiggy" });
console.log("🚀 ~ file: objectMethods.js ~ line 30 ~ swiggyJob", swiggyJob);
