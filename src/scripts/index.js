//Standalone runtime for Regenerator-compiled generator and async functions.
require("regenerator-runtime/runtime");
// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/
import makeGoldenrod from "./modules/makeGoldenrod";

// Using third-party modules
// When importing a npm module, no path is required (just the package name)
import _, { capitalize } from "lodash";

// console.log(_);

// \/ All of your javascript should go here \/
const cardTitles = document.querySelectorAll(".card .card-title");

cardTitles.forEach((element) => makeGoldenrod(element));

// Two examples of libraries: lodash
// use case
const array = [
  {
    id: 1,
    user: "foo",
  },
  {
    id: 2,
    user: "bar",
  },
];

// create  a clone
const copyOfArray = _.cloneDeep(array);
copyOfArray[0].user = "CLONE";
console.log(array);
console.log(copyOfArray);

// capitalize a string
const orgininalString = "alex";
const sant = capitalize(orgininalString);
console.log(sant);
