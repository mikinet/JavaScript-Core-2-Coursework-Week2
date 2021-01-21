function listOfColours(colours) {
  // add html elements
  for (let i = 0; i < elements.length; i++) {
    addElements(elements[i], elements[i].type, elements[i].quantity); // call addElements function
  }
}

// A function to create and add html elements
function addElements(element, type, quantity = 1, index = 0) {
  if (document.querySelector(element.parent)) {
    // if element's parent exists
    let parent = document.querySelector(element.parent); // assign element's parent to a variable
    let el = document.createElement(type); // create element and assign it to a variable
    // add values, attributes to el
    for (let key in element) {
      if (Array.isArray(element[key])) {
        // if current property has a value of type Array
        el[key] = element[key][index]; // assign current index-value of element to el
      } else {
        // otherwise
        el[key] = element[key]; // assign whatever value the current property of element has to el
      }
    }
    // create event and event handler for the <select> element
    el.addEventListener("click", function () {
      let p = document.querySelector("p");
      if (el.value) {
        if (document.querySelector("select")[0].value === "") {
          document.querySelector("select").childNodes[0].remove();
        }          
        p.querySelector("span").innerText = el.value;
        p.style.color = el.value;
      }
    });

    parent.appendChild(el);
    --quantity;
    if (quantity > 0) {
      addElements(element, type, quantity, ++index);
    }
    return;
  }
}
const colours = ["", "red", "blue", "green", "yellow", "pink", "brown"];

const elements = [
  {
    type: "label",
    for: "colours",
    innerText: "Select a colour: ",
    parent: "#content",
    quantity: 1,
  },
  {
    type: "select",
    name: "colours",
    id: "colours",
    parent: "#content",
    quantity: 1,
  },
  {
    type: "p",
    innerText: "You have selected: ",
    parent: "#content",
    quantity: 1,
  },
  {
    type: "span",
    innerText: "",
    parent: "p",
    quantity: 1,
  },
  {
    type: "option",
    value: colours,
    innerText: colours,
    event: "click",
    parent: "select",
    quantity: colours.length,
  },
];

listOfColours(colours);
