$(document).ready(function () {
  $("#pizzaOrder").on("click", function (event) {
    event.preventDefault();
    var size = $("#pizzaSize option:selected").val();
    var crust = $("#pizzaCrust option:selected").val();
    var topping = $("#pizzaTopping option:selected").val();

    total = parseInt(size) + parseInt(crust) + parseInt(topping);
    alert(total);

    function Pizza(size, topping, crust, total) {
      this.size = size;
      this.topping = topping;
      this.crust = crust;
      this.total = total;
    }
    var newPizza = new Pizza(size, topping, crust, total);
    var newOrder = "<p></p>" + newPizza.total;
    $("#pizzaRow").append(newOrder);                                            
  });
});
