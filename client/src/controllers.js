$(function(){
  var SELECTORS = {
    'toppings': '#toppings',
    'slices': '#slices',
    'orderForm': '.container > form',
    'pizzas': '#pizzas',
    'pizzaList': '#pizza-list',
    'formSubmit': 'input[type="button"]'
  };

  function makePizza(){
    var slices = parseInt( $(SELECTORS.slices).val() );
    var toppings = $(SELECTORS.toppings).val().split(/(?:\s?),(?:\s?)/);
    return (slices && toppings) ? new Pizza(slices, toppings) : null;
  }

  $(SELECTORS.orderForm).find(SELECTORS.formSubmit).on('click', function(e){
    var pizza = makePizza();
    console.log(pizza);
  });
});