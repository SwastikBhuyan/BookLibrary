const openModalButton = document.querySelector(".new-book");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close-btn");
const submitButton = document.querySelector(".submit");
const deleteButton = document.querySelector(".delete-btn");
let markAsReadButtons = document.querySelectorAll(".mark-as-read-btn");
let deleteButtons =  document.querySelectorAll(".delete-btn");
const myLibrary = [
    {
        title : "THE KITE RUNNER",
        author : "Khaled Hosseini",
        pages : "371",
        genre : "Fiction/Drama"
    },

    {
        title : "TO KILL A MOCKINGBIRD",
        author : "Harper Lee",
        pages : "281",
        genre : "Fiction/Drama"
    },

    {
        title : "THE GOD OF SMALL THINGS",
        author : "Arundhati Roy",
        pages : "340",
        genre : "Fiction/Drama"
    },

    {
        title : "PRIDE AND PREJUDICE",
        author : "Jane Austen",
        pages : "350",
        genre : "Fiction/Romance"
    },

    {
        title : "THE HOUND OF BASKERVILLES",
        author : "Arthur Conan Doyle",
        pages : "250",
        genre : "Fiction/Mystery"
    },

    {
        title : "THE LORD OF THE RINGS",
        author : "J.R.R Tolkien",
        pages : "1178",
        genre : "Fiction/Fantasy"
    },

    {
        title : "THE NAME OF THE WIND",
        author : "Patrick Rothfuss",
        pages : "662",
        genre : "Fiction/Fantasy"
    },

    {
        title : "BLACK BEAUTY",
        author : "Anna Sewell",
        pages : "250",
        genre : "Fiction/Children's Literature"
    }
];



function showModal() {
    modal.classList.remove("close-modal");
}

function closeModal() {
    modal.classList.add("close-modal");
}

function addBookToLibrary() {
    let newBookTitle = document.querySelector("#new-book-title").value;
    let newBookAuthor = document.querySelector("#new-book-author").value;
    let newBookPages = document.querySelector("#new-book-pages").value;
    let newBookGenre = document.querySelector("#new-book-genre").value;
    let newBook = new Book(newBookTitle,newBookAuthor,newBookPages,newBookGenre);
    myLibrary.push(newBook);
    let bookContainer = document.querySelector(".book-container");
    let newBookDiv = document.createElement("div");
    bookContainer.appendChild(newBookDiv);
    newBookDiv.classList.add("book");

    let newBookDivTitle = document.createElement("p");
    let newBookDivAuthor = document.createElement("p");
    let newBookDivPages = document.createElement("p");
    let newBookDivGenre = document.createElement("p");
    let newDivMarkAsReadButton = document.createElement("button");
    let newDivDeleteButton = document.createElement("button");
    newBookDiv.appendChild(newBookDivTitle);
    newBookDiv.appendChild(newBookDivAuthor);
    newBookDiv.appendChild(newBookDivPages);
    newBookDiv.appendChild(newBookDivGenre);
    newBookDiv.appendChild(newDivMarkAsReadButton);
    newBookDiv.appendChild(newDivDeleteButton);
    newBookDivTitle.classList.add("title");
    newBookDivTitle.textContent = newBookTitle;
    newBookDivAuthor.classList.add("author");
    newBookDivAuthor.textContent = `by ${newBookAuthor}`;
    newBookDivPages.classList.add("number-of-pages");
    newBookDivPages.textContent = `Pages : ${newBookPages}`;
    newBookDivGenre.classList.add("genre");
    newBookDivGenre.textContent = `Genre : ${newBookGenre}`;
    newDivMarkAsReadButton.classList.add("mark-as-read-btn");
    newDivMarkAsReadButton.textContent = "MARK AS READ";
    newDivMarkAsReadButton.addEventListener("click", () => {
        changeReadStatus(newDivMarkAsReadButton);
    });
    newDivDeleteButton.classList.add("delete-btn");
    newDivDeleteButton.textContent = "DELETE";
    newDivDeleteButton.addEventListener("click", () => {
        deleteBook(newDivDeleteButton);
    });
}

function Book(title, author, pages, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
}

function changeReadStatus(button) {
    if (button.textContent === "MARK AS READ") {
        button.textContent = "READ";
        button.style.borderColor = "green";
    } else if (button.textContent === "READ") {
        button.textContent = "NOT READ";
        button.style.borderColor = "red";
    } else if (button.textContent === "NOT READ") {
        button.textContent = "READ";
        button.style.borderColor = "green";
    }
}

function deleteBook (button) {
    button.parentElement.remove();
};

openModalButton.addEventListener("click", () => {
    showModal();
});

closeModalButton.addEventListener("click", () => {
    closeModal();
});

submitButton.addEventListener("click", () => {
    addBookToLibrary();
    closeModal();
});

markAsReadButtons.forEach(button => {
    button.addEventListener("click", () => {
        changeReadStatus(button);
    });
});

deleteButtons.forEach(button => {
    button.addEventListener("click", () => {
        deleteBook(button);
    })
})