function receivesAFunction(callback) {
    // Take a callback function as an argument and call it
    callback();
  }
  
  // Example usage:
  receivesAFunction(() => {
    console.log('This is a callback function being called.');
  });
  
  function returnsANamedFunction() {
    // Return a named function
    function namedFunction() {
      console.log('This is a named function.');
    }
    return namedFunction;
  }
  
  // Example usage:
  const myNamedFunction = returnsANamedFunction();
  myNamedFunction();
  
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      console.log('This is an anonymous function.');
    };
  }
  
  // Example usage:
  const myAnonymousFunction = returnsAnAnonymousFunction();
  myAnonymousFunction();
  