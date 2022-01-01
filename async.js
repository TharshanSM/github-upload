const books = [
  { name: 'Harry Potter', Director: 'JK Rowling', Genre: 'Adventure' },
  { name: 'Transformers', Director: 'Micheal Bay', Genre: 'Action' },
];

//   call back function
function BookDetails() {
  setTimeout(function () {
    books.forEach((book) => {
      let bookDetail = `Name: ${book.name}\tDirector: ${book.Director}\tGenre: ${book.Genre}`;
      console.log(bookDetail);
    });
  }, 1000);
}

function insertBook(value, callBack) {
  setTimeout(function () {
    books.push(value);
    callBack();
  }, 3000);
}

//   remember when calling callback function it is not to put paranthathese
BookDetails();
insertBook(
  { name: 'Conjuring', Director: 'James Wan', Genre: 'Horror' },
  BookDetails
);

//   promises
//   modern javascript

function BookDetails() {
  setTimeout(function () {
    books.forEach((book) => {
      let bookDetail = `Name: ${book.name}\tDirector: ${book.Director}\tGenre: ${book.Genre}`;
      console.log(bookDetail);
    });
  }, 1000);
}

function insertBook(value) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      books.push(value);

      const error = false;
      if (!error) {
        resolve('Working');
      } else {
        reject('Error: Something Went Wrong');
      }
    }, 3000);
  });
}

insertBook({ name: 'Conjuring', Director: 'James Wan', Genre: 'Horror' })
  .then((msg) => console.log(msg))
  .then(BookDetails)
  .catch((err) => console.log(err));

//   json promise
fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
  });

const user = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((res) => console.log(res));
