axios.get('http://localhost/HelloWorld/Online-Store/products', {
  params: {//the key and value pairs of the query parameter
    product_id: 1
  }
})
.then(data => console.log(data))

// axios.post('http://localhost/HelloWorld/Online-Store/products', {
//   product_name: 'book',
// });