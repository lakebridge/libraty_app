const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
  // the constructor...
}

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
  // take params, create a book then store it in the array
}

addBookToLibrary('from flesh to light', 'yassine laghzioui', 365, false);
addBookToLibrary('l`art d`entreprendre', 'yassine laghzioui', 246, true);


const bookList = document.querySelector(".container");



const openBtn = document.querySelector("#openDialog");
const popDialog = document.querySelector("#bookDialog");
const form = popDialog.querySelector("form");

openBtn.addEventListener("click", () => { 
                        popDialog.showModal()
                        }
                        )

popDialog.addEventListener("close", () => {
                        if (popDialog.returnValue !== "confirm") return;
                        const data = new FormData(form);

                        const newBook = new Book(data.get("title"), data.get("author"), Number(data.get("pages")), data.get("Read?"));

                        myLibrary.push(newBook);
                        Display_NB(newBook)
                        console.log("Dialogue closed, returned value", popDialog.returnValue);

                        form.reset();
                        }
                        )

function Display() {

    for (const book of myLibrary) {
        // bookList.textContent = "";
        const card = document.createElement("div");

        const footer = document.querySelector(".footer");

        card.classList.add("card");
        card.textContent = `Title: ${book.title}, Author: ${book.author}, ${book.pages} Pages`;

        bookList.insertBefore(card, footer);
        // bookList.appendChild(card);
}
}

function Display_NB(book) {

        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = `Title: ${book.title}, Author: ${book.author}, ${book.pages} Pages`;

        bookList.insertBefore(card, footer);
}

Display();
