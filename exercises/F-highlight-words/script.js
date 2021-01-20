/********** Declare (and initialize) html element variables **********/
// label
let labelKeys = ["type", "for", "innerText", "parentID", "parentType"];
let labelValues = [
  "label",
  "#colours",
  "Select a highlight colour: ",
  "#content",
  "div",
];

// select
let selectKeys = ["type", "name", "id", "parentID", "parentType"];
let selectValues = ["select", "colours", "colours", "#content", "div"];

// option
let optionKeys = [
  "type",
  "value",
  "innerText",
  "index",
  "parentID",
  "parentType",
];
let optionValues = []; // values of all option objects

// p (= paragraph)
let pKeys = ["type", "innerText", "parentID", "parentType"];
let pValues = ["p", "", "#content", "div"];

// span
let spanKeys = [
  "type",
  "innerText",
  "backgroundColor",
  "index",
  "event",
  "parentType",
];
let spanValues = [];

let keyValuePairs = [
  [labelKeys, labelValues],
  [selectKeys, selectValues],
  [pKeys, pValues],
];

function highlightWords(paragraph, colours) {
  /********** Declare (and initialize) html element variables **********/
  optionValues = colours.map((colour, index) => [
    "option",
    colour,
    colour,
    index,
    "#colours",
    "select",
  ]); // values of all option objects

  spanValues = paragraph
    .split(" ")
    .map((span, index) => ["span", `${span} `, "none", index, "click", "p"]); // values of all span objects

  // a
  keyValuePairs.push([optionKeys, optionValues]);
  keyValuePairs.push([spanKeys, spanValues]);

  // create custom objects which, in turn, are going to be used to create the required html elements
  let htmlElements = [];
  for (let i = 0; i < keyValuePairs.length; i++) {
    htmlElements.push(createObjects(keyValuePairs[i])); // add objects to htmlElements
  }
  // create an html element based on each object in htmlElements array and append it to its parent node
  htmlElements.flat().forEach(createAddElement);
}

// Function to create custom objects
function createObjects(objProperty, i = 0, array = []) {
  // if (!objProperty[0] && !objProperty[1]) {
  //   throw "Error: Missing information";
  // }

  // try {
  let keys = objProperty[0];
  let values = objProperty[1];
  let obj = {};

  if (Array.isArray(values[i])) {
    keys.forEach(function (key, index) {
      obj[key] = values[i][index];
    });
    array.push(obj);
    if (++i < values.length) {
      createObjects(objProperty, i, array);
    }
  } else {
    keys.forEach(function (key, index) {
      obj[key] = values[index];
    });
    array.push(obj);
  }
  return array;
  // } catch (e) {
  //   console.log(e);
  // }
}

function createAddElement(element) {
  let parent;
  // if (!document.querySelector(element.parentType)) {
  //   parent= document.createElement(element.parentType);
  //   if (element.parentID) {
  //     parent.id = element.parentID;
  //   }
  // }
  let el = document.createElement(element.type); // html element
  switch (element.type) {
    case "label":
      el.for = element.for;
      el.innerText = element.innerText;
      parent = document.querySelector(element.parentID);
      break;
    case "select":
      el.name = element.name;
      el.id = element.id;
      parent = document.querySelector(element.parentID);
      // console.log(el.id)
      break;
    case "option":
      el.value = element.value;
      el.innerText = element.innerText;
      parent = document.querySelector(element.parentID);
      break;
    case "p":
      el.innerText = element.innerText;
      parent = document.querySelector(element.parentID);
    case "span":
      el.innerText = element.innerText;
      parent = document.querySelector(element.parentType);
      break;
    default:
      return;
  }

  parent.appendChild(el);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);

/************** <span> elements click event *************/
let spanElements = document.querySelectorAll("p span"); // cllect all span elements
spanElements.forEach(addClickEvent); // add a 'click' event for each span element

// The function
function addClickEvent(span) {
  span.addEventListener("click", function (e) {
    let colour = document.getElementById("colours").value; // currently selected colour in the dropdown list
    if (colour === "none" || span.style.backgroundColor === colour) {
      e.target.style.backgroundColor = "transparent";
    } else {
      e.target.style.backgroundColor = colour;
    }
  });
}

// Make sure any existing highlight colour is removed from the paragraph
let select = document.getElementById("colours");
select.onchange = function () {
  console.log(select);
  if (select.value === "none") {
    spanElements.forEach(
      (span) => (span.style.backgroundColor = "transparent")
    );
  }
};
