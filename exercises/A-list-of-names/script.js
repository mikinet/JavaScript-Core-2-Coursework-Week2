function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (let i = 0; i < arrayOfPeople.length; i++) {
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    content.appendChild(h1).innerText = people[i].name;
    content.appendChild(h2).innerText = people[i].job;
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
