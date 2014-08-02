function Professor(options){
  options = options || {};
	this.science = options.science || 'Computer Science';
	this.university = options.university || 'San Francisco State University';
	this.scientificWorks = options.scientificWorks || 1;
  this.age = options.age || 30;
  this.nobelPrize = false;
}

Professor.prototype = new Student();

Professor.prototype.checkNobelPrize = function() {
	if (this.scientificWorks < 10) {
		this.nobelPrize = false;
	} else if (this.scientificWorks >= 10) {
		this.nobelPrize = true;
	} else if (typeof this.scientificWorks !== 'number') {
		throw new Error('scientificWorks should be a number value');
	}
};

Professor.prototype.makeScientificWork = function() {
  this.scientificWorks++;
  this.checkNobelPrize();
  this.age++;
};