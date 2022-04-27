function classroom(teacher) {
  return function study() {
  console.log(
    `${ teacher } says to study ${ this.topic }`);
  };
}

var assignment = classroom("Kyle");
assignment();
// Kyle says to study undefined

var homework = {
    topic: "JS",
    assignment: assignment
};

homework.assignment();
// Kyle says to study JS


var otherHomework = {
    topic: "Math"
};


// Function.prototype.call()
// The call() method calls a function with a given this value 
// and arguments provided individually.

assignment.call(otherHomework);
// Kyle says to study Math