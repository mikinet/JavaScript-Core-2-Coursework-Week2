function listOfColours(colours) {
  let content = document.getElementById("content");
  let select = document.createElement("select");
  let p = document.createElement("p");

  content.appendChild(select);
  content.appendChild(p);

  colours.forEach((colour) => {
    let option = document.createElement("option");
    option.innerText = colour;
    option.value = colour;
    select.appendChild(option);
  });

  p.innerText = `You have selected: `;
  select.addEventListener("click", function () {
    p.innerText = `You have selected: ${select.value}`;
    p.style.color = select.value;
  });
}

const colours = ["", "red", "blue", "green", "yellow", "pink", "brown"];
listOfColours(colours);
