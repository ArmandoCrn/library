// COMPONENTS
const bookLibrary = document.querySelector(".books-cards");

const bookName = document.querySelector("#book-name");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const bookStatus = document.querySelector("#book-status");
const submitBtn = document.querySelector("#submit");

// This is only for the first remove on the page (only for Prova card)
const fixRemoveBook = document.querySelector(".remove");

const myLibrary = [
  {
    name: "Prova",
    author: "Prova",
    pages: "800",
    status: "read",
  },
];

// FUNCTIONS
function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.changeStatus = function () {
  //na roba del genere?
  /*
  quando premiamo il bottone read

  if (status da dove lo prendiamo? Dall'obj? === "read") {
    this.status = "not-read";
    selezioni il bottone e gli fai cambiare quello che mostra
    e cambi la classe in not-read
  } else {
    this.status = "read";
    selezioni il bottone e gli fai cambiare scrittura
    e metti la classe "read"
  }


  */
};

function addBook() {
  const name = bookName.value;
  const author = bookAuthor.value;
  const pages = bookPages.value;
  const status = bookStatus.value;

  if (name && author && pages) {
    let newBook = new Book(name, author, pages, status);

    myLibrary.push(newBook);
    showBook(newBook);
  }
}

let indexOfBook = 1;

function showBook(book) {
  const div = document.createElement("div");
  div.classList.add("card");
  div.dataset.index = `${indexOfBook}`;
  indexOfBook++;
  div.innerHTML = `
  <p class="name">${book.name}</p>
  <p class="author">Author: ${book.author}</p>
  <p class="pages">Pages: ${book.pages}</p>

  <button class="">${book.status}</button>
  <button class="remove">Remove</button>
  `;
  bookLibrary.appendChild(div);
  const newRemoveBook = document.querySelectorAll(".remove");
  newRemoveBook.forEach((remove) => remove.addEventListener("click", removeBook));

  resetInput(bookName);
  resetInput(bookAuthor);
  resetInput(bookPages);
}

function resetInput(input) {
  input.value = "";
}

function removeBook(e) {
  const parent = e.target.parentElement;
  const index = parent.dataset.index;
  // Delite the object in myLibrary
  myLibrary.splice(index, 1);

  parent.remove();
}

submitBtn.addEventListener("click", addBook);
fixRemoveBook.addEventListener("click", removeBook);

/*TODO:
1 - Poter cambiare colore al btn read/not read
rispetto a se il value di status è read o meno

if value === read
metti la classe read al coso 
e come innertext del bottone scrivi "Read"

altrimenti
classe not read al btn
e innerText "Not-read"


2 - Mostrare e rimuovere il modale premendo il btn + add book
Quindi toccherà poi rendere steacky il coso, nasconderlo sotto e farlo poppare sopra
ricorda di mettere la pagina a tutto schermo

fai comparire un overlay che renda tutto scuro lo sfondo sotto
QUANDO premi lo sfondo e non l'interno del modale devi farlo scomparire
bella rottura :/
*/
