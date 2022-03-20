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
    var totalOrder = "<p>Total </p>" + " " + newPizza.total;
    var sizeOrder = "<p>Size </p>" + " " + newPizza.size;
    var crustOrder = "<p>Crust </p>" + " " + newPizza.crust;
    var toppingOrder = `<p>Topping </p>` + newPizza.topping;

    $("#pizzaRow").append(totalOrder + sizeOrder + crustOrder + toppingOrder);
  });
});
