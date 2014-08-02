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
    expect(student.school).toBe('MIT');
    expect(student.semester).toBe(1);
    expect(student.getsPayment).toBe(true);
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

});

describe('Student should take exams and ', function() {
  var student = new Student();

  beforeEach(function() {
    student.getsPayment = false;
  });

  afterEach(function() {
    student.getsPayment = true;
  });

  it('get payment and increase semester if exam success', function() {
    student.takeExams(true);
    expect(student.getsPayment).toBe(true);
    expect(student.semester).toBeGreaterThan(1);
  });
});
