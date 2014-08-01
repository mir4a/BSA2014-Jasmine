describe('Student should', function() {
  var student;

  beforeEach(function() {
    student = new Student();
  });

  it('inherit properties from Man', function(){
    expect('name' in student).toBe(true);
    expect('age' in student).toBe(true);
    expect('gender' in student).toBe(true);
  });

  it('has default values', function () {
    expect(student.name).toBe('Vasiliy');
    expect(student.age).toBe(5);
    expect(student.gender).toBe('Male');
  });

  it('has own properties', function(){
    expect(student.hasOwnProperty('school')).toBe(true);
    expect(student.hasOwnProperty('semester')).toBe(true);
    expect(student.hasOwnProperty('getsPayment')).toBe(true);
  });

  it('throw an error if property of takeExams not boolean', function(){
    expect(function(){
      student.takeExams('fail exam')
    }).toThrowError('areResultsFine should be a boolean value')
  });



  /***
    more tests should be added
  **/


});
