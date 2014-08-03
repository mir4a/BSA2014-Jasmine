function Man(options){
	options = options || {};
	this.name = options.name || 'Vasiliy';
	this.age = options.age || 5;
	this.gender = options.age || 'Male';
}

Man.prototype.changeName = function(name) {
	if (typeof name === 'string'){
		this.name = name;
	} else {
		throw new Error('Name should be a string');
	}
};

Man.prototype.grow = function(years) {
	if (typeof years === 'undefined') {
		this.age++;
	} else if (typeof years === 'number') {
    if (years > 0) {
		  this.age += years;
    } else {
      throw new Error('Grow method can accept only a positive number');
    }
	} else {
		throw new Error('Years should be a number');
	}
};