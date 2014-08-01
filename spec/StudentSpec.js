describe('Student should', function() {
  var student;

  beforeEach(function() {
    student = new Student();
  });

  it('inherit properties from Man', function(){
    expect(student.hasOwnProperty('name')).toBe(true);
    expect(student.hasOwnProperty('age')).toBe(true);
    expect(student.hasOwnProperty('gender')).toBe(true);
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
