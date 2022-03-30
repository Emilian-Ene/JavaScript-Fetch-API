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
