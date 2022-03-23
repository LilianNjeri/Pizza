function Pizza(size, topping, crust, total) {
  this.size = size;
  this.topping = topping;
  this.crust = crust;
  this.total = total;
}

let myArray = [];


$(document).ready(function () {
  $("#pizzaOrder").on("click", function (event) {
    event.preventDefault();
    $(".summary").show();
    // $("#pizzaOrder").hide();
    $("#more").show();

    
    var size = $("#pizzaSize option:selected").val();
    var crust = $("#pizzaCrust option:selected").val();
    var topping = $("#pizzaTopping option:selected").val();

    total = parseInt(size) + parseInt(crust) + parseInt(topping);

    // var grandTotal = grandTotal + total;

    var newPizza = new Pizza(size, topping, crust, total);
    var totalOrder = `${newPizza.total}<br>`;
    var sizeOrder = `<p class="order-text">Size KES ${newPizza.size}</p>`;
    var crustOrder = `<p class="order-text">Crust KES ${newPizza.crust}</p>`;
    var toppingOrder = `<p class="order-text">Topping KES ${newPizza.topping}</p>`;

    $("#pizzaRow").append(
      `You ordered Pizza @Ksh${newPizza.size}, Crust @Ksh${newPizza.crust} and Topping @Ksh${newPizza.topping} Total @Ksh${totalOrder}`
    );
   myArray.push(total);
   
   var grandTotal = myArray.reduce((x, y) => x + y);

   console.log(grandTotal);
    
    

  });
});

// button add more click listener
$(document).ready(function () {
  $("#more").click(function(event){
    event.preventDefault();
    $(".delivery").show();
    var size = $("#pizzaSize option:selected").val();
    var crust = $("#pizzaCrust option:selected").val();
    var topping = $("#pizzaTopping option:selected").val();

    total = parseInt(size) + parseInt(crust) + parseInt(topping);

    // var grandTotal = grandTotal + total;

    var newPizza = new Pizza(size, topping, crust, total);
    var totalOrder = `${newPizza.total}<br>`;
    var sizeOrder = `<p class="order-text">Size KES ${newPizza.size}</p>`;
    var crustOrder = `<p class="order-text">Crust KES ${newPizza.crust}</p>`;
    var toppingOrder = `<p class="order-text">Topping KES ${newPizza.topping}</p>`;

    $("#pizzaRow").append(
      `You ordered Pizza @Ksh${newPizza.size}, Crust @Ksh${newPizza.crust} and Topping @Ksh${newPizza.topping} Total @Ksh${totalOrder}`
    );
    myArray.push(total);

    var grandTotal = myArray.reduce((x, y) => x + y);

    console.log(grandTotal);
    
  
  });
 
});
$(document).ready(function () {
  $("#yes").click(function (event) {
    event.preventDefault();
    $("#buttonyess").show();
    alert("Delivery fee @Ksh 200")
    var delivLocation = prompt("Enter your location:");
    alert("Your order will be delivered to " + delivLocation);
    
  

  });
  
})

// button no

$(document).ready(function () {
  $("#no").click(function(event) {
    event.preventDefault();
    $("#buttonno").show();

    alert("You can Checkout");
  });
})

$(document).ready(function () {
  $("#buttonyess").click(function (event) {
    event.preventDefault();
    var grandTotal = myArray.reduce((x, y) => x + y);
    let deliveryCost = 200;
    let final = grandTotal + deliveryCost;
    $("#pizzaRow").append(`Total is ${final}`);

  });
});


$(document).ready(function () {
  $("#buttonno").click(function (event) {
    event.preventDefault();
    var grandTotal = myArray.reduce((x, y) => x + y);

    $("#pizzaRow").append(`Total is ${grandTotal}`);


  });
});