function Student(options){
  options = options || {};
	this.school = options.school || 'MIT';
	this.semester = options.school || 1;
	this.getsPayment = options.getsPayment || true;
}

Student.prototype = new Man();

Student.prototype.takeExams = function(areResultsFine) {
	if (areResultsFine === true){
		this.semester++;
		this.getsPayment = true;
	} else if (areResultsFine === false){
		this.getsPayment = false;
	} else if (typeof areResultsFine !== 'boolean'){
		throw new Error('areResultsFine should be a boolean value');
	}
};