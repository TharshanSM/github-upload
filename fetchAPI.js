document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getJSON').addEventListener('click', getJSON);
document.getElementById('myForm').addEventListener('submit', postData);

var div = document.getElementById('res');

function getText() {
  // fetch('sample1.txt')
  //   .then(function (res) {
  //     return res.text();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //   });

  fetch('sample1.txt')
    .then((res) => res.text())
    .then((data) => {
      setTimeout(() => {
        div.innerHTML = data;
        div.style.paddingTop = '10px';
      }, 3000);
    })
    .catch((err) => console.log(err));
}

function getJSON() {
  fetch('user.json')
    .then((res) => res.json())
    .then((data) => {
      // let users = data;
      // console.log(JSON.stringify(data));
      let output = '';
      data.forEach((user) => {
        output += `<div><ul>
        <li>UserID: ${user.id}</li>
        <li>User Name: ${user.name}</li>
        <li>User Email: ${user.email}</li>
        <li>User City: ${user.address.city}</li>
        </ul></div>`;
      });
      div.innerHTML = output;
    })
    .catch((err) => console.log(err));
}

function postData(e) {
  e.preventDefault();
  let title = document.getElementById('txtTitle').value;
  let body = document.getElementById('txtBody').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
