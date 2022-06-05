fetch("http://localhost/HelloWorld/Online-Store/php/products")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      displaySideInfo(data, i);
    }
    document.getElementById("allPrices").innerHTML = data.length;
    document.getElementById("allRatings").innerHTML = data.length;
    document.getElementById("allCategories").innerHTML = data.length;
  })
  .catch((error) => console.error("FETCH ERROR:", error));

let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let p5 = 0;
let s0 = 0;
let s1 = 0;
let s2 = 0;
let s3 = 0;
let s4 = 0;
let s5 = 0;
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let c5 = 0;
let c6 = 0;

function displaySideInfo(data, i) {
  const product = data[i];

  filterPrice(product);
  filterRatings(product);
  filterCategories(product);
}

function filterPrice(product){
  if (product.product_price < 1000){
    p1++;
    document.getElementById("less1000").innerHTML = p1;
  }
  if (product.product_price > 1000 && product.product_price < 5000){
    p2++;
    document.getElementById("less5000").innerHTML = p2;
  }
  if (product.product_price > 5000 && product.product_price < 10000){
    p3++;
    document.getElementById("less10000").innerHTML = p3;
  }
  if (product.product_price > 10000 && product.product_price < 20000){
    p4++;
    document.getElementById("less20000").innerHTML = p4;
  }
  if (product.product_price > 20000){
    p5++;
    document.getElementById("over20000").innerHTML = p5;
  }
}

function filterRatings(product){
  if (product.product_rating == 0 || product.product_rating == 0.5){
    s0++;
    document.getElementById("0Star").innerHTML = s0;
  }
  if (product.product_rating == 1 || product.product_rating == 1.5){
    s1++;
    document.getElementById("1Star").innerHTML = s1;
  }
  if (product.product_rating == 2 || product.product_rating == 2.5){
    s2++;
    document.getElementById("2Star").innerHTML = s2;
  }
  if (product.product_rating == 3 || product.product_rating == 3.5){
    s3++;
    document.getElementById("3Star").innerHTML = s3;
  }
  if (product.product_rating == 4 || product.product_rating == 4.5){
    s4++;
    document.getElementById("4Star").innerHTML = s4;
  }
  if (product.product_rating == 5){
    s5++;
    document.getElementById("5Star").innerHTML = s5;
  }
}

function filterCategories(product){
  if (product.category == 'Apple'){
    c1++;
    document.getElementById("cateApple").innerHTML = c1;
  }
  if (product.category == 'Speakers / Microphones'){
    c2++;
    document.getElementById("cateSound").innerHTML = c2;
  }
  if (product.category == 'Computer / Console'){
    c3++;
    document.getElementById("catePC").innerHTML = c3;
  }
  if (product.category == 'Computer Accessories'){
    c4++;
    document.getElementById("cateTV").innerHTML = c4;
  }
  if (product.category == 'Office Equipment'){
    c5++;
    document.getElementById("cateOffice").innerHTML = c5;
  }
  if (product.category == 'Other Devices'){
    c6++;
    document.getElementById("cateOther").innerHTML = c6;
  }
}