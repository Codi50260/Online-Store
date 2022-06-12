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

    const temp = document.createElement("tr");
    temp.id = i + 1;
    parent.appendChild(temp);

    const temp2 = document.createElement("td");
    temp2.className = "align-middle";
    temp.appendChild(temp2);

    const temp3 = document.createElement("img");
    temp3.id = "img".concat(i.toString());
    temp3.alt = "Product Image";
    temp3.style = "width: 50px";
    temp2.appendChild(temp3);

    const img = document.getElementById('img'.concat(i.toString()));
    img.src = product.product_image;

    const temp12 = document.createElement("p");
    temp12.id = "name".concat(i.toString());
    temp2.appendChild(temp12);

    const name = document.getElementById('name'.concat(i.toString()));
    name.innerHTML = product.product_name;

    const temp4 = document.createElement("td");
    temp4.className = "align-middle";
    temp4.id = "price".concat(i.toString());
    temp.appendChild(temp4);

    const price = document.getElementById('price'.concat(i.toString()));
    price.innerHTML = "R".concat(product.product_price.toString());
    price.value = product.product_price;

    const temp5 = document.createElement("td");
    temp5.className = "align-middle";
    temp.appendChild(temp5);

    const temp18 = document.createElement("div");
    temp18.className = "input-group quantity mx-auto";
    temp18.style = "width: 100px";
    temp5.appendChild(temp18);

    const temp21 = document.createElement("div");
    temp21.className = "input-group-btn";
    temp18.appendChild(temp21);

    const temp15 = document.createElement("form");
    temp15.action = "php/decrement_quantity.php";
    temp15.method = "post";
    temp21.appendChild(temp15);

    const temp6 = document.createElement("button");
    temp6.className = "btn btn-sm btn-primary btn-minus";
    temp6.name = "name-";
    temp6.value = product.product_name;
    temp15.appendChild(temp6);

    const temp7 = document.createElement("i");
    temp7.className = "fa fa-minus";
    temp6.appendChild(temp7);

    const temp19 = document.createElement("input");
    temp19.id = "quantity".concat(i.toString());
    temp19.type = "text";
    temp19.className = "form-control form-control-sm bg-secondary border-0 text-center";
    temp19.value = product.product_quantity;
    temp18.appendChild(temp19);

    const temp20 = document.createElement("div");
    temp20.className = "input-group-btn";
    temp18.appendChild(temp20);

    const temp14 = document.createElement("form");
    temp14.action = "php/increment_quantity.php";
    temp14.method = "post";
    temp20.appendChild(temp14);

    const temp16 = document.createElement("button");
    temp16.className = "btn btn-sm btn-primary btn-plus";
    temp16.name = "name+";
    temp16.value = product.product_name;
    temp14.appendChild(temp16);

    const temp17 = document.createElement("i");
    temp17.className = "fa fa-plus";
    temp16.appendChild(temp17);

    const temp8 = document.createElement("td");
    temp8.className = "align-middle";
    temp8.id = "total_price".concat(i.toString());
    temp.appendChild(temp8);

    totalProductPrice(i)

    const temp9 = document.createElement("td");
    temp9.className = "align-middle";
    temp.appendChild(temp9);

    const temp13 = document.createElement("form");
    temp13.action = "php/remove_item.php";
    temp13.method = "post";
    temp9.appendChild(temp13);

    const temp10 = document.createElement("button");
    temp10.className = "btn btn-sm btn-danger";
    temp10.name = "name";
    temp10.value = product.product_name;
    temp13.appendChild(temp10);

    const temp11 = document.createElement("i");
    temp11.className = "fa fa-times";
    temp10.appendChild(temp11);
}

function totalProductPrice(i){
    const price = document.getElementById('price'.concat(i.toString())).value;
    const quantity = document.getElementById('quantity'.concat(i.toString())).value;

    const total = price * quantity;
    const totalString = "R".concat(total.toString());
    document.getElementById('total_price'.concat(i.toString())).innerHTML = totalString;
    document.getElementById('total_price'.concat(i.toString())).value = total;
}

function calcSubtotal(numProducts){
    const Arr = []
    for (let i = 0; i < numProducts; i++) {
        const price = document.getElementById('total_price'.concat(i.toString())).value;
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