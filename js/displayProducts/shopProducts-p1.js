fetch("http://localhost/HelloWorld/Online-Store/php/products")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    let maxPoductsPerPage = 12;
    for (let i = 0; i < maxPoductsPerPage; i++) {
      displayProduct(data, i);
    }
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayProduct(data, i) {
  const product = data[i];
  const parent = document.getElementById('parent');

  const temp = document.createElement("div");
  temp.className = "col-lg-3 col-md-4 col-sm-6 pb-1"
  temp.id = i + 1
  parent.appendChild(temp);

  const temp2 = document.createElement("div");
  temp2.className = "product-item bg-light mb-4";
  temp.appendChild(temp2);

  const temp3 = document.createElement("div");
  temp3.className = "product-img position-relative overflow-hidden";
  temp2.appendChild(temp3);

  const temp4 = document.createElement("img");
  temp4.className = "img-fluid w-100";
  temp4.alt = "image of product"
  temp4.id = "img".concat(i.toString());
  temp3.appendChild(temp4);

  const temp5 = document.createElement("div");
  temp5.className = "product-action";
  temp3.appendChild(temp5);

  const temp18 = document.createElement("form");
  temp18.action = "cart.html";
  temp5.appendChild(temp18);

  const temp6 = document.createElement("button");
  temp6.className = "btn btn-outline-dark btn-square";
  temp18.appendChild(temp6);

  const temp7 = document.createElement("i");
  temp7.className = "fa fa-shopping-cart";
  temp6.appendChild(temp7);

  const temp19 = document.createElement("form");
  temp19.action = "php/post_data.php";
  temp19.method = "post";
  temp5.appendChild(temp19);

  const temp20 = document.createElement("input");
  temp20.name = "id";
  temp20.value = i + 1;
  temp20.style = "display: none";
  temp19.appendChild(temp20);

  const temp16 = document.createElement("button");
  temp16.className = "btn btn-outline-dark btn-square";
  temp19.appendChild(temp16);

  const temp17 = document.createElement("i");
  temp17.className = "fa fa-eye";
  temp16.appendChild(temp17);

  const temp8 = document.createElement("div");
  temp8.className = "text-center py-4";
  temp2.appendChild(temp8);

  const temp9 = document.createElement("a");
  temp9.className = "h6 text-decoration-none text-truncate";
  temp9.id = "name".concat(i.toString());
  temp8.appendChild(temp9);

  const temp10 = document.createElement("div");
  temp10.className = "d-flex align-items-center justify-content-center mt-2";
  temp8.appendChild(temp10);

  const temp11 = document.createElement("h5");
  temp11.id = "price".concat(i.toString());
  temp10.appendChild(temp11);

  const temp12 = document.createElement("h6");
  temp12.className = "text-muted ml-2";
  temp10.appendChild(temp12);

  const temp13 = document.createElement("div");
  temp13.className = "d-flex align-items-center justify-content-center mb-1";
  temp8.appendChild(temp13);

  calcStars(product.product_rating, temp13)

  const temp15 = document.createElement("small");
  temp15.innerHTML = '('.concat(product.product_total_reviews).concat(')');
  temp13.appendChild(temp15);


  const name = document.getElementById('name'.concat(i.toString()));
  name.innerHTML = product.product_name;

  const price = document.getElementById('price'.concat(i.toString()));
  price.innerHTML = "R".concat(product.product_price);

  const image = document.getElementById("img".concat(i.toString()));
  image.src = product.image_path;
}

function float2int (value) {
  return value | 0;
}

function calcStars(star, temp13) {
  if (Number.isInteger(Number(star))) {
    for (let i = 0; i < star; i++) {
      const temp14 = document.createElement("small");
      temp14.className = "fa fa-star text-primary mr-1";
      temp13.appendChild(temp14);
    }
    let empty = 5 - Number(star);
    for (let i = 0; i < float2int(Number(empty)); i++) {
      const temp14 = document.createElement("small");
      temp14.className = "far fa-star text-primary mr-1";
      temp13.appendChild(temp14);
    }
  } else {
    for (let i = 0; i < float2int(Number(star)); i++) {
      const temp14 = document.createElement("small");
      temp14.className = "fa fa-star text-primary mr-1";
      temp13.appendChild(temp14);
    }
    if (float2int(Number(star)) != Number(star)){
      const temp14 = document.createElement("small");
      temp14.className = "fa fa-star-half-alt text-primary mr-1";
      temp13.appendChild(temp14);
    }
    let empty = 5 - Number(star);
    for (let i = 0; i < float2int(Number(empty)); i++) {
      const temp14 = document.createElement("small");
      temp14.className = "far fa-star text-primary mr-1";
      temp13.appendChild(temp14);
    }
  }
}