promise.then(f1).catch(f2);
//Versus:

promise.then(f1, f2);


//They are not the same because the first one has a catch to catch an error if it occurs
//But the second one has no error handling functions. so The error would be passed down the chain.
