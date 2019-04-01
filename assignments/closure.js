// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

ffunction boxing() {
  const canelo = 'World Champion';
  console.log(`Canelo is ${canelo}!`);
  
  function ggg() {
    const tripleG = 'Triple G'
    console.log(`My name is ${tripleG} and I want a shot at the ${canelo}! `);
    const message = "I want my shot";
    
    function wba() {
      console.log(`${tripleG} we got your message: ${message}, and we hear you loud and clear!`);
      
    }
    wba();
  }
  ggg();
}

boxing();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
