// call external api
document.getElementById('btnUser').addEventListener('click', getUser);

function getFile() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'sample1.txt', true);
  xhr.onload = function () {
    // console.log(this.responseText);
    let res = document.createElement('p');
    if (xhr.status == 200) {
      res.textContent = this.responseText;
    } else {
      res.textContent = 'Not Found';
    }
    document.getElementById('res').appendChild(res);
  };
  xhr.send();
}

// internal JSON file
function getUserJSON() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'user.json', true);
  xhr.onload = function () {
    if ((xhr.status = 200)) {
      let content = JSON.parse(this.responseText);
      console.log(content);
    } else {
      console.log(xhr.status);
    }
  };
  xhr.send();
}

// external api
function getUser() {
  let xhr = new XMLHttpRequest();
  let div = document.getElementById('res');
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  xhr.onload = function () {
    if (xhr.status == 200) {
      let users = JSON.parse(this.responseText);
      let output = '';

      users.forEach((book) => {
        // let li = document.createElement('li');
        // li.textContent = book.name;
        // div.appendChild(li);
        output += `<div><ul>
        <li>Name: ${book.name}</li>
        <li>UserName: ${book.username}</li>
        <li>Email Address: ${book.email}</li>
        </ul></div>`;
      });
      div.innerHTML = output;
    } else {
      console.log('Cannot Found');
    }
  };
  xhr.send();
}
