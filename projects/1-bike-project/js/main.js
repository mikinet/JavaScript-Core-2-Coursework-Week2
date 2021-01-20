/***************** PART 1 SOLUTION ******************/
let buttons = {
  blueBtn: {
    jumbotron: "#588fbd",
    "btn-primary": "#ffa500",
    "btn-secondary": {
      colour: "#ffffff",
      bgdColour: "#000000",
    },
  },
  orangeBtn: {
    jumbotron: "#f0ad4e",
    "btn-primary": "#5751fd",
    "btn-secondary": {
      colour: "#ffffff",
      bgdColour: "#31b0d5",
    },
  },
  greenBtn: {
    jumbotron: "#87ca8a",
    "btn-primary": "#000000",
    "btn-secondary": {
      // colour: "#ffffff",
      bgdColour: "#8c9c08",
    },
  },
};

// This function changes the theme of the html document
function changeTheme(obj) {
  let myButtons = Object.keys(obj).map((key) => document.getElementById(key));
  let affectedHtmlElements = Object.values(obj);
  let len = myButtons.length;
  for (let i = 0; i < len; i++) {
    addClickEvent(myButtons[i], affectedHtmlElements[i]);
  }
}

// This function adds click event to buttons 'blue', 'orange' and 'green'
function addClickEvent(button, htmlElements) {
  button.addEventListener("click", function () {
    for (let key in htmlElements) {
      // assume the first html element is the one we are looking for
      // this works for our case as there is exactly one element with the specified class in the html document
      let affectedElement = document.querySelector(`.${key}`);

      changeBackgroundColour(affectedElement, key, htmlElements[key]);
    }
  });
}

// This function makes the required style changes upon button click
function changeBackgroundColour(htmlElement, key, value) {
  if (key === "btn-secondary") {
    if (value.colour) {
      // because our green button does not change text colour of 'Volunteer' button
      htmlElement.style.color = value.colour;
    }
    htmlElement.style.backgroundColor = value.bgdColour;
  } else {
    htmlElement.style.backgroundColor = value;
  }
}

changeTheme(buttons);


/***************** PART 2 SOLUTION ******************/
let allInputs = [];
let btnSubmit = document.querySelector("button[type='submit']");
let form = document.querySelector("form");
let inputBoxes = form.querySelectorAll(".form-group input");

inputBoxes.forEach((input) => allInputs.push(input));
allInputs.push(form.querySelector(".form-group textarea"));

btnSubmit.addEventListener("click", function () {
  event.preventDefault();
  if (validateForm(allInputs)) {
    alert("Thank you for filling out the form");
    resetForm(allInputs);
  } else {
    allInputs.forEach(addInputBoxEvent);
  }
});

function validateForm(inputElements) {
  inputElements.forEach((input) => {
    if (input.value.length === 0) {
      input.style.backgroundColor = "red";
    } else {
      if (input.type === "email" && !input.value.includes("@")) {
        input.style.backgroundColor = "red";
      }
    }
  });
  return inputElements.every((input) => input.style.backgroundColor !== "red");
}

function resetForm(inputElements) {
  inputElements.forEach((element) => (element.value = ""));
}

function addInputBoxEvent(inputBox) {
  inputBox.addEventListener("input", function () {    
    if (inputBox.value.length > 0) {
      inputBox.style.backgroundColor = "transparent";
    } else {
      inputBox.style.backgroundColor = "red";
    }
  });
}
