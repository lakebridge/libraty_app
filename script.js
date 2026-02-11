let myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
  // the constructor...
}

Book.prototype.toggle = function () {
this.read = !this.read;
                }


function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
  // take params, create a book then store it in the array
}

addBookToLibrary('From Flesh to Light', 'Yassine Laghzioui', 365, false);
addBookToLibrary("L'Art d'Entreprendre", 'Yassine Laghzioui', 246, true);


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

                        const newBook = new Book(data.get("title"), data.get("author"), Number(data.get("pages")), data.get("read") === "true");

                        myLibrary.push(newBook);

                        Display_NB(newBook)
                        console.log("Dialogue closed, returned value", popDialog.returnValue);

                        form.reset();
                        }
                        )



function Display_NB(book) {

        const card = document.createElement("div");
        card.classList.add("card");
        const footer = document.querySelector(".footer");

        let status = "Yes";

        if (book.read === false) {
            status = "No";
        }

        const title = document.createElement("div");
        title.classList.add("row", "title");
        title.textContent = book.title;

        const meta = document.createElement("div");
        meta.classList.add("row", "meta");
        meta.textContent = `${book.author} • ${book.pages} pages`;

        const read = document.createElement("div");
        read.classList.add("row", "read");
        read.textContent = `Read: ${status}`;

        // card.textContent = `Title: ${book.title}, Author: ${book.author}, ${book.pages} Pages, Read?: ${status}`;

        card.append(title, meta, read);

        bookList.insertBefore(card, footer);

        const rmvButton = document.createElement("button");
        rmvButton.classList.add("rmvButton");

        rmvButton.textContent = "Remove 📖";

        card.appendChild(rmvButton);

        rmvButton.addEventListener("click", (e) => {
            e.preventDefault();
            card.remove();

            myLibrary = myLibrary.filter(b => b.id !== book.id);
        });
        
        displayToggle(book, card);
        
}

function displayToggle(book, card) {
        
        const toggle = document.createElement("input");
        const switchLabel = document.createElement("label");
        const readText = document.createElement("span");

        toggle.type = "checkbox";
        switchLabel.classList.add = "switch";
        toggle.classList.add = "toggle";

        toggle.checked = book.read;

        readText.textContent = (book.read === true) ? "Read" : "Not Read";

        switchLabel.append(toggle, readText);

        card.appendChild(switchLabel);

        

        toggle.addEventListener("click", () => {
            console.log("before", book.read);            
            book.toggle();
            console.log("after", book.read);
        })

       
       

}

function Display() {

    for (const book of myLibrary) {
        Display_NB(book);
}
}

Display();
