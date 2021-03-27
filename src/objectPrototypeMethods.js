// How `this` works in different context

// "use strict";

// Global
console.log(" global this ", this);

// `this` will point to `windows` until we are not using `use strict`
function globalFunction() {
  console.log("function this ", this);
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

console.log("className.getName() ", mayank.name.getFull());

// `this` refers to current class instance
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

console.log("india.getContinent() ", india.location.getContinent());

const button = document.createElement("button");
button.textContent = "click me";
document.body.append(button);

// `this` refers to target element for events
button.addEventListener("click", function () {
  console.log("event ", this);
});
