fetch('http://localhost/HelloWorld/Online-Store/products')
  .then(response => response.json())//return object as a json text
  .then(data => console.log(data));//using arrow function inside chained .then()

// const data = {
//   "product_id": 10,
//   "product_name": "testing",
//   "product_price": 500,
//   "product_rating": "0 Stars",
//   "image_path": "dir/here"
// } //the object we'll replace it with

// fetch('http://localhost/HelloWorld/Online-Store/products', {
// method: 'PUT',
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(data), //parsing object variable created above
// })