// How `this` works in different context

// "use strict";

// Global
console.log("🚀 ~ file: objectPrototypeMethods.js ~ line 4 ~ this", this);

// `this` will point to `windows` until we are not using `use strict`
function globalFunction() {
  console.log(
    "🚀 ~ file: objectPrototypeMethods.js ~ line 9 ~ globalFunction ~ this",
    this
  );
}

globalFunction();

const mayank = {
  name: {
    firstName: "mayank",
    lastName: "suman",
    getFull() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
};

console.log(
  "🚀 ~ file: objectPrototypeMethods.js ~ line 27 ~ className.getName()",
  mayank.name.getFull()
);

function countryClass(name, continent) {
  (this.name = name),
    (this.continent = continent),
    (this.location = {
      getContinent: () => {
        return `the continent is ${this.continent}`;
      },
    });
}

const india = new countryClass("India", "asia");

console.log(
  "🚀 ~ file: objectPrototypeMethods.js ~ line 44 ~ india.getContinent()",
  india.location.getContinent()
);

const button = document.createElement("button");
button.textContent = "click me";
document.body.append(button);

button.addEventListener("click", function () {
  console.log("event", this);
});
