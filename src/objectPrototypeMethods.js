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
