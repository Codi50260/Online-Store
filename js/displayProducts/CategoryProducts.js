fetch("http://localhost/HelloWorld/Online-Store/php/cart")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    document.getElementById('numCart').innerHTML = data.length;
    document.getElementById('numCart2').innerHTML = data.length;
  })
  .catch((error) => console.error("FETCH ERROR:", error));

$("input:checkbox").on('click', function() {
  var $box = $(this);
  if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    $(group).prop("checked", false);
  } else {
    $box.prop("checked", false);
  }
});

function getProducts(str){
  fetch("http://localhost/HelloWorld/Online-Store/php/products")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      if (str === "all"){
        for (let i = 0; i < 12; i++) {
          displayCategoryProduct(data, i, str);
        }
      } else {
        for (let i = 0; i < data.length; i++) {
          displayCategoryProduct(data, i, str);
        }
      }
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

function remove(){
  $('.col-lg-3.col-md-4.col-sm-6.pb-1').remove();
}

function validate() {
  function checkPrice(){
    remove();
    if (document.getElementById('price-all').checked) {
      getProducts("all");
    } else if (document.getElementById('price-1').checked) {
      getProducts(1000);
    } else if (document.getElementById('price-2').checked) {
      getProducts(5000);
    } else if (document.getElementById('price-3').checked) {
      getProducts(10000);
    } else if (document.getElementById('price-4').checked) {
      getProducts(20000);
    } else if (document.getElementById('price-5').checked) {
      getProducts("over");
    }
  }

  function checkRating(){
    remove();
    if (document.getElementById('rating-all').checked) {
      getProducts("all");
    } else if (document.getElementById('rating-1').checked) {
      getProducts(0);
    } else if (document.getElementById('rating-2').checked) {
      getProducts(1);
    } else if (document.getElementById('rating-3').checked) {
      getProducts(2);
    } else if (document.getElementById('rating-4').checked) {
      getProducts(3);
    } else if (document.getElementById('rating-5').checked) {
      getProducts(4);
    } else if (document.getElementById('rating-6').checked) {
      getProducts(5);
    }
  }

  function checkCategory(){
    remove();
    if (document.getElementById('Category-all').checked) {
      getProducts("all");
    } else if (document.getElementById('Category-1').checked) {
      getProducts("Apple");
    } else if (document.getElementById('Category-2').checked) {
      getProducts("Speakers / Microphones");
    } else if (document.getElementById('Category-3').checked) {
      getProducts("Computer / Console");
    } else if (document.getElementById('Category-4').checked) {
      getProducts("Computer Accessories");
    } else if (document.getElementById('Category-5').checked) {
      getProducts("Office Equipment");
    } else if (document.getElementById('Category-6').checked) {
      getProducts("Other Devices");
    }
  }
  checkPrice();
  checkRating();
  checkCategory();
}

function displayCategoryProduct(data, i, str) {
  if (str === "all"){
    const product = data[i];
    structure(product, i);
  }

  if (str === 1000){
    if (data[i].product_price < str){
      const product = data[i];
      structure(product, i);
    }
  } else if (str === 5000){
    if (data[i].product_price > 1000 && data[i].product_price < str){
      const product = data[i];
      structure(product, i);
    }
  } else if (str === 10000){
    if (data[i].product_price > 5000 && data[i].product_price < str){
      const product = data[i];
      structure(product, i);
    }
  } else if (str === 20000){
    if (data[i].product_price > 10000 && data[i].product_price < str){
      const product = data[i];
      structure(product, i);
    }
  } else if (str === "over"){
    if (data[i].product_price > 20000){
      const product = data[i];
      structure(product, i);
    }
  }

  if (str === 0){
    if (data[i].product_rating == str || data[i].product_rating == 0.5){
      const product = data[i];
      structure(product, i);
    }
  } else if (str === 1){
    if (data[i].product_rating == str || data[i].product_rating == 1.5){
      const product = data[i];
      structure(product, i);
    }
  } else if (str === 2){
    if (data[i].product_rating == str || data[i].product_rating == 2.5){
      const product = data[i];
      structure(product, i);
    }
  } else if (str === 3){
    if (data[i].product_rating == str || data[i].product_rating == 3.5){
      const product = data[i];
      structure(product, i);
    }
  } else if (str === 4){
    if (data[i].product_rating == str || data[i].product_rating == 4.5){
      const product = data[i];
      structure(product, i);
    }
  } else if (str === 5){
    if (data[i].product_rating == str){
      const product = data[i];
      structure(product, i);
    }
  }

  if (str === "Apple"){
    if (data[i].category == str){
      const product = data[i];
      structure(product, i);
    }
  } else if (str === "Speakers / Microphones"){
    if (data[i].category == str){
      const product = data[i];
      structure(product, i);
    }
  } else if (str === "Computer / Console"){
    if (data[i].category == str){
      const product = data[i];
      structure(product, i);
    }
  } else if (str === "Computer Accessories"){
    if (data[i].category == str){
      const product = data[i];
      structure(product, i);
    }
  } else if (str === "Office Equipment"){
    if (data[i].category == str){
      const product = data[i];
      structure(product, i);
    }
  } else if (str === "Other Devices"){
    if (data[i].category == str){
      const product = data[i];
      structure(product, i);
    }
  }
}

function structure(product, i){
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
  temp18.action = "php/post_cart.php";
  temp18.method = "post";
  temp5.appendChild(temp18);

  const temp21 = document.createElement("input");
  temp21.name = "id";
  temp21.value = i + 1;
  temp21.style = "display: none";
  temp18.appendChild(temp21);

  const temp6 = document.createElement("button");
  temp6.className = "btn btn-outline-dark btn-square";
  temp18.appendChild(temp6);

  const temp7 = document.createElement("i");
  temp7.className = "fa fa-shopping-cart";
  temp6.appendChild(temp7);
  
  const temp19 = document.createElement("form");
  temp19.action = "php/post_individual_product.php";
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
}