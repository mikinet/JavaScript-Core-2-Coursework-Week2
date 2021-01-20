function readingList(books) {
  let content = document.querySelector("#content"); // determine where to add our new html content
  let h1 = document.createElement("h1");  // heading element
  let ul = document.createElement("ul");  // unordered list 

  h1.innerText = "Book List"; // heading text
  content.appendChild(h1);  // add h1 to content
  books.map(addBookToHTML).forEach((li) => ul.appendChild(li)); // add items, i.e. books, to ul
  // style ul
  ul.style.listStyleType = "none";
  ul.style.display = "flex";
  ul.style.flexFlow = "row wrap";
  ul.style.margin = 0;
  ul.style.width = "80%";

  content.appendChild(ul);  // add ul to content
}

// Function to add a book list item
let addBookToHTML = function (book) {
  // create html elements
  let li = document.createElement("li"); // list item
  let p = document.createElement("p");  // paragraph
  let img = document.createElement("img");  // image

  // style li
  li.style.width = "24%";
  li.style.margin = 30;
  li.style.marginLeft = 0;
  li.style.padding = "10px";
  if (book.alreadyRead) {
    li.style.backgroundColor = "green";
  } else {
    li.style.backgroundColor = "red";
  }

  p.innerText = `${book.title} - ${book.author}`;

  // image element styles and attribute
  img.src = book.link;
  img.style.maxWidth = "100%";
  img.style.height = "15em";

  // add p and img elements to li element
  li.appendChild(p);
  li.appendChild(img);

  return li;
};


const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    link: "https://images-na.ssl-images-amazon.com/images/I/41bWcNdTGmL.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    link:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    link: "https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg",
  },
];

readingList(books);
