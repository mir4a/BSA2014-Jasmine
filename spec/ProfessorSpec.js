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
  });

});
