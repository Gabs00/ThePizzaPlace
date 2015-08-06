$(function(){
  var SELECTORS = {
    'toppings': '#toppings',
    'slices': '#slices',
    'orderForm': '.container > form',
    'pizzas': '#pizzas',
    'pizzaList': '#pizza-list',
    'formSubmit': 'input[type="button"]',
    'renderedPizzas': 'pizza-display',
    'pizzaDetailSelectors': [
      '.pizza-id',
      '.pizza-total',
      '.pizza-toppings',
      '.pizza-slices-left'
    ]
  };

  var pizzas = [];

  var pizzaTemplate = [
    '<div class="pizza-display">',
      '<span class="pizza-id"></span>',
      '<div class="pizza-details">',
        'Total Slices: <span class="pizza-total"></span>',
        'Toppings: <ul class="pizza-toppings"></ul>',
        'Slices Left<span class="pizza-slices-left"></span>',
        '<input class="pizza-slice-button" type="button" id="take-slice" value="Take Slice" />',
      '</div>',
    '</div>'
  ].join('');

  $(SELECTORS.orderForm).find(SELECTORS.formSubmit).on('click', function(e){
    var pizza = makePizza();

    if(pizza){
      pizzas.push(pizza);
      renderPizzas();
    }

    console.log(pizzas);
  });

  function makePizza(){

    var slices = parseInt( $(SELECTORS.slices).val() );
    var toppings = $(SELECTORS.toppings).val().split(/(?:\s?),(?:\s?)/);

    return (slices && toppings) ? new Pizza(slices, toppings) : null;

  }

  function renderPizzas(){
    var $pizzaList = $(SELECTORS.pizzaList);

    $pizzaList.empty();
    pizzas.forEach(function(pizza, i){
      var $el = $('<li></li>').append(prerenderPizza(pizza, i));
      $pizzaList.append($el);
    });

  }

  /* Builds html template for a pizza */
  function prerenderPizza(pizza, id){
    var $pizzaView = $(pizzaTemplate);

    $pizzaView.attr('id', id);

    var details = [
      id,
      pizza.totalSlices,
      pizza.toppings,
      pizza.slicesLeft
    ];

    return addDetails($pizzaView, SELECTORS.pizzaDetailSelectors, details);
  }

  /* Adds pizza details where needed in the pizza template */
  function addDetails($el, selectors, values){
    selectors.forEach(function(selector){

      var $elem = $el.find(selector);
      var item = values.shift();

      if(Array.isArray(item)){
        item.forEach(function(topping){
          $elem.append('<li>' + topping + '</li>');
        })
      } else {
        $el.find(selector).append(item);
      }

    });

    return $el;
  }
});