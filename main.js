const grid = document.querySelector(".grid");
const cardTemplate = document.getElementById("card-template");
for (let i = 0; i < 10; i++) {
  grid.append(cardTemplate.content.cloneNode(true));
}

// fetch handling error
fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
  if (response.status != 200) {
    console.log(`Oopss Error... ${response.status}`);
    return;
  }

  response
    .json()
    .then((posts) => {
      console.log(posts);
      grid.innerHTML = "";
      posts.forEach((post) => {
        const div = cardTemplate.content.cloneNode(true);
        div.querySelector("[data-title]").textContent = post.title;
        div.querySelector("[data-body]").textContent = post.body;
        grid.append(div);
      });
    })
    .catch((err) => console.error(err));
});
