// Function to create an html element
function createElement(value = "", type, eventName = "") {
  let el;
  switch (type) {
    case "select":
      el = document.createElement("select");
      break;
    case "option":
      el = document.createElement("option");
      el.textContent = value;
      el.value = value;
      break;
    case "span":
      el = document.createElement("span");
      el.textContent = `${value} `;
      // create a 'click' event handler for a <span> element
      el.addEventListener(eventName, function () {
        let bgdColour = document.querySelector("select").value;
        if (bgdColour === "none") {
          el.style.backgroundColor = "transparent";
        } else {
          if (el.style.backgroundColor === bgdColour) {
            el.style.backgroundColor = "transparent";
          } else {
            el.style.backgroundColor = bgdColour;
          }            
        }
      });
      break;
    default:
      el = document.createElement("p");
      break;
  }
  return el;
}

function highlightWords(paragraph, colours) {
  let content = document.getElementById("content");

  // create <p> and <select> elements
  let select = createElement("", "select", "click");
  let p = createElement("", "p");
  let spanElements = []; // to collect all <span> elements

  // append p and select to content
  content.appendChild(select);
  content.appendChild(p);

  // create all <option> elements
  for (let i = 0; i < colours.length; i++) {
    let option = colours[i];
    option = createElement(option, "option", "click");
    select.appendChild(option);
  }

  // create all <span> elements
  for (let i = 0; i < paragraph.split(" ").length; i++) {
    let span = paragraph.split(" ")[i];
    span = createElement(span, "span", "click");
    p.appendChild(span);
    spanElements.push(span); // collect span items
  }

  // add 'click' event listener to the <select> element.
  // Note: this must be done last, once all preliminary steps have been completed
  select.addEventListener("click", function () {
    if (select.value === "none") {
      spanElements.forEach(
        (span) => (span.style.backgroundColor = "transparent")
      );
    }
  });
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
