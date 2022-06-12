fetch("http://localhost/HelloWorld/Online-Store/php/cart")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    for (let i = 0; i < data.length; i++) {
        displayInfo(data, i);
    }
    document.getElementById('numCart').innerHTML = data.length;
    document.getElementById('numCart2').innerHTML = data.length;
    grandTotal(data.length);
  })
  .catch((error) => console.error("FETCH ERROR:", error));


function displayInfo(data, i){
    const product = data[i];
    const parent = document.getElementById('parent');

    const temp = document.createElement("div");
    temp.className = "d-flex justify-content-between"
    temp.id = i + 1;
    parent.appendChild(temp);

    const temp2 = document.createElement("p");
    temp2.id = "name".concat(i.toString())
    temp.appendChild(temp2);

    const name = document.getElementById('name'.concat(i.toString()));
    name.innerHTML = product.product_quantity.concat(" x ").concat(product.product_name);

    const temp3 = document.createElement("p");
    temp3.id = "price".concat(i.toString())
    temp.appendChild(temp3);

    const price = document.getElementById('price'.concat(i.toString()));
    price.innerHTML = "R".concat((product.product_price * product.product_quantity).toString());
    price.value = product.product_price * product.product_quantity;
}

function calcSubtotal(numProducts){
    const Arr = []
    for (let i = 0; i < numProducts; i++) {
        const price = document.getElementById('price'.concat(i.toString())).value;
        Arr.push(price)
    }
    const totalSum = Arr.reduce((partialSum, a) => partialSum + a, 0);
    const totalSumString = "R".concat(totalSum.toString());
    document.getElementById('totalCost').innerHTML = totalSumString;
    document.getElementById('totalCost').value = totalSum;

    shippingCost(totalSum);
}

function shippingCost(subtotal){
    const cost = Math.round(subtotal/100)*100;
    let total = cost - subtotal;
    if (total < 100){
        total = total + 100;
    }
    const totalString = "R".concat(total.toString());
    document.getElementById('shipping').innerHTML = totalString;
    document.getElementById('shipping').value = total;
}

function grandTotal(numProducts){
    calcSubtotal(numProducts);
    
    const subtotal = document.getElementById('totalCost').value;
    const shipping = document.getElementById('shipping').value;
    const grandTotal = subtotal + shipping;

    const grandTotalString = "R".concat(grandTotal.toString());
    document.getElementById("grandTotal").innerHTML = grandTotalString;
}