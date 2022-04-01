fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((copletedata) => {
    // console.log(copletedata[2].title);
    let data1 = "";
    copletedata.map((values) => {
      data1 += `     
        <div class="card">
          <h1 class="title">${values.title}</h1>
          <img src=${values.image} alt="img" class="images"/>
          <p class="description">${values.description}</p>
          <p class="category">${values.category}</p>
          <p class="price">${values.price} £</p>
        </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
  });

const input = document.getElementById("search");
input.addEventListener("keyup", search);

function search() {
  const inputVal = input.value;
  const title = document.querySelectorAll(".card");

  for (let i = 0; i < title.length; i++) {
    if (title[i].innerHTML.toLocaleLowerCase().includes(inputVal)) {
      title[i].style.display = "";
    } else {
      title[i].style.display = "none";
    }
  }
}
