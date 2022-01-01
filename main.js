// async await function for webapi
// async function fetchUser() {
//   const user = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await user.json();
//   console.log(data);
// }

// fetchUser();

// using async await function
const books = [
  { name: 'Harry Potter', Director: 'JK Rowling', Genre: 'Adventure' },
  { name: 'Transformers', Director: 'Micheal Bay', Genre: 'Action' },
];

function BookDetails() {
  setTimeout(function () {
    books.forEach((book) => {
      let bookDetail = `Name: ${book.name}\tDirector: ${book.Director}\tGenre: ${book.Genre}`;
      console.log(bookDetail);
    });
  }, 1000);
}

// function insertBook(value) {
//   setTimeout(function () {
//     books.push(value);
//   }, 3000);
// }

function insertBook(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      books.push(value);
      resolve();
      reject('Cant Work');
    }, 3000);
  });
}

async function init() {
  await insertBook({
    name: 'Conjuring',
    Director: 'James Wan',
    Genre: 'Horror',
  });

  BookDetails();
}

init();
