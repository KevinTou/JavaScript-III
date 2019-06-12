/* The four principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Object Binding - The value of "this" in the global scope is the window/console Object.
 * 2. Implicit Binding - The value of "this" after a function is called is the object before the dot.
 * 3. New Binding - The value of "this" whenever a constructor function is used is the specific instance of the object
 * 4. Explicit Binding - The value of "this" can be changed explicitly using the "call" or "apply" method
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function yellSentence(sentence) {
  console.log(this);
  return sentence.toUpperCase();
}

// Principle 2

// code example for Implicit Binding

const dad = {
  name: "Bob",
  children: 3,
  joke: function() {
    console.log(`${this.name}: Don't trust atoms. They make up everything!`);
  }
};

dad.joke();

// Principle 3

// code example for New Binding

function Polygon(name, sides, color) {
  this.name = name;
  this.sides = sides;
  this.color = color;
  this.greet = function() {
    console.log(
      `Hello! I am a ${this.color}, ${this.sides}-sided ${this.name}.`
    );
  };
}

const triangle = new Polygon("triangle", "three", "blue");
const rectangle = new Polygon("rectangle", "four", "green");

triangle.greet();
rectangle.greet();

// Principle 4

// code example for Explicit Binding

// Using the same code as Principle 3

triangle.greet.call(rectangle);
rectangle.greet.apply(triangle);
