function Professor(options){
  options = options || {};
	this.science = options.science || 'Computer Science';
	this.university = options.university || 'San Francisco State University';
	this.scientificWorks = options.scientificWorks || 1;
  this.age = 30;
}

Professor.prototype = new Student();

Professor.prototype.nobelPrize = function() {
	if (this.scientificWorks < 10){
		return false;
	} else if (this.scientificWorks >= 10){
		return true;
	} else if (typeof this.scientificWorks !== 'number'){
		throw new Error('this.scientificWorks should be a number value');
	}
};

Professor.prototype.makeScientificWork = function() {
  this.scientificWorks++;
  this.nobelPrize();
  this.age++;
};