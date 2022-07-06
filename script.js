// COMPONENTS
const bookLibrary = document.querySelector(".books-cards");

const bookName = document.querySelector("#book-name");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const bookStatus = document.querySelector("#book-status");
const submitBtn = document.querySelector("#submit");

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

  // invoca una funzione che chiude in automatico il modale
  // sperando che non ti causi errori stupidi dicendo che gli input son vuoti
  //o scrivilo direttamente qui dentro
}

// Change status on book in the Library
function changeStatus(index) {
  const currentStatus = myLibrary[index].status;

  if (currentStatus === "read") {
    myLibrary[index].status = "not-read";
  }

  if (currentStatus === "not-read") {
    myLibrary[index].status = "read";
  }
}

/*
  quando premiamo il bottone read

  cosa deve succedere?
  Qui dentro dibbiamo solamente rendere possibile
  il cambiamento detto status all'interno degli oggetti in library
  per farlo però dobbiamo sapere il loro index
  e per sapere il loro index serve aggiungere la funzionalità al pulsante
  che va a prendere il datalist

  quindi

  mettiamo come argomento l'index e creiamo la funzione tenendo in mente questo


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

function removeBook(e) {
  const parent = e.target.parentElement;
  const index = parent.dataset.index;
  // Delite the object in myLibrary
  myLibrary.splice(index, 1);

  parent.remove();
}

//EVENTS
window.addEventListener("load", windowLoad);
submitBtn.addEventListener("click", addBook);

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
