describe('Professor should', function() {
  var professor;

  beforeEach(function() {
    professor = new Professor();
  });

  it('inherit properties from Man', function(){
    expect('name' in professor).toBe(true);
    expect('age' in professor).toBe(true);
    expect('gender' in professor).toBe(true);
  });

  it('inherit properties from Student', function(){
    expect('school' in professor).toBe(true);
    expect('semester' in professor).toBe(true);
    expect('gender' in professor).toBe(true);
  });

  it('has default values', function () {
    expect(professor.science).toBe('Computer Science');
    expect(professor.age).toBe(30);
    expect(professor.university).toBe('San Francisco State University');
    expect(professor.scientificWorks).toBe(1);
  });

  it('has own properties', function(){
    expect(professor.hasOwnProperty('science')).toBe(true);
    expect(professor.hasOwnProperty('university')).toBe(true);
    expect(professor.hasOwnProperty('scientificWorks')).toBe(true);
    expect(professor.hasOwnProperty('nobelPrize')).toBe(true);
  });

});

describe('Professor wants to get Nobel Prize and', function() {
  var professor = new Professor({age: 42});

  beforeEach(function() {
    professor.makeScientificWork();
    spyOn(professor, 'checkNobelPrize');
  });


  it('should increase amount of scientific works, age and try to get Nobel Prize', function() {
    expect(professor.scientificWorks).toBeGreaterThan(1);
  });

  it('should set age equal to 44', function() {
    expect(professor.age).toBe(44);
  });

  it('should check if nobelPrize has been called after calling makeScientificWork', function() {
    expect(professor.checkNobelPrize.calls.count()).toBe(0);

    professor.makeScientificWork();
    professor.makeScientificWork();

    expect(professor.checkNobelPrize.calls.count()).toBe(2);
  });

  it('should set age to 48 and set scientific works to 7', function() {
    expect(professor.age).toBe(48);
    expect(professor.scientificWorks).toBe(7);
  });

  it('should set scientific works to be 8', function() {
    expect(professor.scientificWorks).toBe(8);
  });

  it('should set scientific works to be 9', function() {
    expect(professor.scientificWorks).toBe(9);
  });

  it('should set scientific works to be 10', function() {
    expect(professor.scientificWorks).toBe(10);
  });

  it('should check scientific works to be more than 10 and set age of the Professor to 52', function() {
    expect(professor.scientificWorks).toBeGreaterThan(10);
    expect(professor.age).toBe(52);
  });

  it('should finally get the Nobel Prize', function() {
    expect(professor.nobelPrize).toBeTruthy();
  })

});

describe('Check Professors methods for errors', function() {
  var professor;

  beforeEach(function() {
    professor = new Professor();
  });

  it('should thrown an error if scientificWorks is not number', function() {
    professor.scientificWorks = 'a few';
    expect(function() {
      professor.checkNobelPrize()
    }).toThrowError('scientificWorks should be a number value');
  });
});
