// important from 364 to 371
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
// *****************

// this will allow you to send http request that is allow you to send http request in all prowsers
const xhr = new XMLHttpRequest();
// to open the connection, configure the request
// takes two argument one for take the get method and the other for the request will be send
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.onload = () => {
  // these data in the opjects not pure JS so we need to convert it before entering into an opject
  // Parse allow you to convert the json data to Js data
  // console.log(xhr.response);
  // you can instead of using this you can write outside the onload function,
  // this title: xhr.responseType = 'json';
  const arrayOfData = JSON.parse(xhr.response);
  // console.log(arrayOfData);
  for (const post of arrayOfData){
    const postEl = document.importNode(postTemplate.content,true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  
  }
};
xhr.send();

// *****************
