fetch("http://localhost/HelloWorld/Online-Store/php/products")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    // console.log(data);
    displayProduct(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayProduct(data) {
  const product = data[0];

  const name = document.getElementById('name');
  name.innerHTML = product.product_name;

  const price = document.getElementById('price');
  price.innerHTML = product.product_price;

  const image = document.getElementById("img");
  image.src = product.image_path;
}  