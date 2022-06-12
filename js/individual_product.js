fetch("http://localhost/HelloWorld/Online-Store/php/individual_product")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    product = data[0];
    displayInfo(product);
  })
  .catch((error) => console.error("FETCH ERROR:", error));


function displayInfo(product){
    document.getElementById('prod_name').innerHTML = product.product_name;
    document.getElementById('prod_name2').innerHTML = product.product_name;

    document.getElementById('img1').src = product.image_path_1;
    document.getElementById('img2').src = product.image_path_2;
    document.getElementById('img3').src = product.image_path_3;

    div = document.getElementById('parentStar');
    calcStars(product.product_rating, div)

    document.getElementById('reviews').innerHTML = '('.concat(product.product_total_reviews).concat(')');

    document.getElementById('price').innerHTML = "R".concat(product.product_price);

    document.getElementById('shortDesc').innerHTML = product.desc1;
    document.getElementById('longDesc1').innerHTML = product.desc2;
    document.getElementById('longDesc2').innerHTML = product.desc3;
}

function float2int (value) {
    return value | 0;
}

function calcStars(star, div) {
    if (Number.isInteger(Number(star))) {
      for (let i = 0; i < star; i++) {
        const temp14 = document.createElement("small");
        temp14.className = "fa fa-star text-primary mr-1";
        div.appendChild(temp14);
      }
      let empty = 5 - Number(star);
      for (let i = 0; i < float2int(Number(empty)); i++) {
        const temp14 = document.createElement("small");
        temp14.className = "far fa-star text-primary mr-1";
        div.appendChild(temp14);
      }
    } else {
      for (let i = 0; i < float2int(Number(star)); i++) {
        const temp14 = document.createElement("small");
        temp14.className = "fa fa-star text-primary mr-1";
        div.appendChild(temp14);
      }
      if (float2int(Number(star)) != Number(star)){
        const temp14 = document.createElement("small");
        temp14.className = "fa fa-star-half-alt text-primary mr-1";
        div.appendChild(temp14);
      }
      let empty = 5 - Number(star);
      for (let i = 0; i < float2int(Number(empty)); i++) {
        const temp14 = document.createElement("small");
        temp14.className = "far fa-star text-primary mr-1";
        div.appendChild(temp14);
      }
    }
  }