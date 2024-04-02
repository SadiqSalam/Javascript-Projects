//DOM manipulation

//const title = document.querySelector('#main-heading');
//title.style.color = 'red'

// const listItems = document.querySelectorAll('list-items');
// for (i = 0; i < listItems.length; i++){
//     listItems[i].style.fontSize = '2rem';
// }

//Creating Element

// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// ul.append(li)
// li.innerText = 'X-Men';
// li.setAttribute('class', 'list-items');

//Parent Node Traversal

let ul = document.querySelector('ul');
console.log(ul.parentElement.parentElement);