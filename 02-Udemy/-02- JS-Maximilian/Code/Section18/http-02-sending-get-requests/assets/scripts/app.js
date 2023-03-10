// by using Promises and await for the same code
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
}
// function fetchPosts(){
//   sendHttpRequest('GET',"https://jsonplaceholder.typicode.com/posts").then(responseData=>{
//     const listOfPosts = responseData;
//     for (const post of listOfPosts) {
//       const postEl = document.importNode(postTemplate.content, true);
//       postEl.querySelector("h2").textContent = post.title.toUpperCase();
//       postEl.querySelector("p").textContent = post.body;
//       listElement.append(postEl);
//     }

//   })

// }
// fetchPosts();

// by using await and asnch
async function fetchPosts() {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    listElement.append(postEl);
  }
}

// create post not get from the server but send to the server
async function createPost(title, content) {
  const userID = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userID,
  };
  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}
fetchPosts();

createPost("DUMMY", "A dummy post!");
