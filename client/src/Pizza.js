var Pizza = function(slices, toppings){
  this.totalSlices = slices;
  this.slicesLeft = this.totalSlices;
  this.toppings = toppings;
};

Pizza.prototype.getSlices = function(numSlices){
  var slices = [];
  if(this.slicesLeft > numSlices){
    for(var i = 0; i < numSlices; i++){
      var slice = this.getPizzaSlice();
      if(slice){ slices.push(slice); }
    }
  }

  return slices;
}

Pizza.prototype.getPizzaSlice = function(){
  if(this.slicesLeft > 0){
    this.slicesLeft--;
    return new PizzaSlice(this.toppings);
  }
};

var PizzaSlice = function(toppings){
  this.toppings = toppings;
};

