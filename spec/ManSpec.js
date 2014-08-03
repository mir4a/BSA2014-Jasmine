describe('Man should', function() {
  var man;

  beforeEach(function() {
    man = new Man();
  });

  it('have name, age, gender properties', function(){
    expect(man.hasOwnProperty('name')).toBe(true);
    expect(man.hasOwnProperty('age')).toBe(true);
    expect(man.hasOwnProperty('gender')).toBe(true);
  });

  it('default to name Vasiliy', function(){
    expect(man.name).toEqual('Vasiliy');
  });

  it('take custom name', function(){
    var customMan = new Man({
      name: 'Sanya'
    });
    expect(customMan.name).toEqual('Sanya');
  });

  it('check growth method by increasing it from default to 20', function() {
    var man_2 = new Man();
    man_2.grow(15);
    expect(man_2.age).toBe(20);
  });

  it('not get younger (grow method should not accept negative number)', function() {
    var man_3 = new Man();
    expect(function() {
      man_3.grow(-2);
    }).toThrowError('Grow method can accept only a positive number');
  });

  it('accept only numbers for grow method', function() {
    expect(function() {
      man.grow('Five');
    }).toThrowError('Years should be a number')
  });

  it('grow by one year if year parameter is not defined', function() {
    var man_4 = new Man({age: 10});
    man_4.grow();
    expect(man_4.age).toBe(11);
  });

});
