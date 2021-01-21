function listOfColours(colours) {
  let selectEl = document.createElement("select");
  let paragraphEl = document.createElement("p");
  let divEl = document.getElementById("content");

  divEl.appendChild(selectEl);
  divEl.appendChild(paragraphEl);

  colours.forEach((colour) => {
    paragraphEl.innerText = `You have selected: ${colour}`;
    let optionEl = document.createElement("option");
    optionEl.innerText = colour;
    optionEl.value = colour;
    selectEl.appendChild(optionEl);
  });
  selectEl.addEventListener("click", function () {
    paragraphEl.style.color = selectEl.value;
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];
listOfColours(colours);
