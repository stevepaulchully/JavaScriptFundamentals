let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);


//The Output would be 1
//The Promise is resolved and outputs 1 after 1 second
