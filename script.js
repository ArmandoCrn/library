// COMPONENTS
const bookLibrary = document.querySelector(".books-cards");

const bookName = document.querySelector("#book-name");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const bookStatus = document.querySelector("#book-status");
const submitBtn = document.querySelector("#submit");

const addBookBtn = document.querySelector("#add-book");
const modal = document.querySelector(".modal");
const inputField = document.querySelector(".input-fields");

const myLibrary = [];

// FUNCTIONS
function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// Add the first "prova" book
function windowLoad() {
  let newBook = new Book("Prova", "Prova", "800", "read");

  myLibrary.push(newBook);
  showBook(newBook);
}

function addBook() {
  const name = bookName.value;
  const author = bookAuthor.value;
  const pages = bookPages.value;
  const status = bookStatus.value;

  if (name && author && pages) {
    let newBook = new Book(name, author, pages, status);

    toggleModal();
    myLibrary.push(newBook);
    showBook(newBook);
  }
}

// Index for data-list of book in the library array
let indexOfBook = 0;

function showBook(book) {
  const div = document.createElement("div");
  div.classList.add("card");
  div.dataset.index = `${indexOfBook}`;
  indexOfBook++;
  let bookStatus = "";

  if (book.status === "read") {
    bookStatus = "Read";
  } else {
    bookStatus = "Not-read";
  }

  div.innerHTML = `
  <p class="name">${book.name}</p>
  <p class="author">Author: ${book.author}</p>
  <p class="pages">Pages: ${book.pages}</p>

  <button class="status ${book.status}">${bookStatus}</button>
  <button class="remove">Remove</button>
  `;
  bookLibrary.appendChild(div);
  const statusBtn = document.querySelectorAll(".status");
  statusBtn.forEach((btn) => btn.addEventListener("click", changeStatus));

  const newRemoveBook = document.querySelectorAll(".remove");
  newRemoveBook.forEach((remove) => remove.addEventListener("click", removeBook));

  resetInput(bookName);
  resetInput(bookAuthor);
  resetInput(bookPages);
}

function resetInput(input) {
  input.value = "";
}

// Change status on book in the Library and show the right color
function changeStatus(e) {
  const target = e.target;
  const index = target.parentElement.dataset.index;
  const currentStatus = myLibrary[index].status;

  if (currentStatus === "read") {
    toggleStatus("not-read", "Not-read", target, index);
  }

  if (currentStatus === "not-read") {
    toggleStatus("read", "Read", target, index);
  }
}

function toggleStatus(status1, status2, target, index) {
  myLibrary[index].status = status1;
  target.innerText = status2;

  if (status1 === "read") {
    target.classList.remove("not-read");
    target.classList.add("read");
  } else {
    target.classList.remove("read");
    target.classList.add("not-read");
  }
}

function removeBook(e) {
  const parent = e.target.parentElement;
  const index = parent.dataset.index;
  myLibrary.splice(index, 1);
  parent.remove();
}

function toggleModal() {
  modal.classList.toggle("active");
}

function propagation(e) {
  e.stopPropagation();
}

//EVENTS
window.addEventListener("load", windowLoad);
addBookBtn.addEventListener("click", toggleModal);
modal.addEventListener("click", toggleModal);
submitBtn.addEventListener("click", addBook);
inputField.addEventListener("click", propagation, { capture: false });
