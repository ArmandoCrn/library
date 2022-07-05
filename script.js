// COMPONENTS
const bookName = document.querySelector("#book-name");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const bookStatus = document.querySelector("#book-status");
const submitBtn = document.querySelector("#submit");
const bookLibrary = document.querySelector(".books-cards");

// FUNCTIONS
function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBook(e) {
  const name = bookName.value;
  const author = bookAuthor.value;
  const pages = bookPages.value;
  const status = bookStatus.value;

  if (name && author && pages) {
    let newBook = new Book(name, author, pages, status);

    showBook(newBook);
  }
}

function showBook(book) {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<p class="name">${book.name}</p>
  <p>Author: <span class="author">${book.author}</span></p>
  <p>Pages: <span class="pages">${book.pages}</span></p>
  <button class="">${book.status}</button>
  <button class="remove">Remove</button>
  `;
  bookLibrary.appendChild(div);

  resetInput(bookName);
  resetInput(bookAuthor);
  resetInput(bookPages);
}

function resetInput(input) {
  input.value = "";
}

submitBtn.addEventListener("click", addBook);
