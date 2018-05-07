// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback("City not found");
// }

// getTempCallback("Philadelphia", function(err, temp) {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log("success", temp);
//   }
// });

// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject("City not found");
//     }, 1000);
//   });
// }

// getTempPromise("Philadelphia").then(
//   temp => {
//     console.log("Promise success", temp);
//   },
//   err => {
//     console.log("promise error", err);
//   }
// );


function addPromise(a, b) {
    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b ===  'number'){
            resolve(a+b);
        }else{
            reject("a and b must be numbers");
        }
    });
}

function success(result){
    console.log('sum success ', result)
}

function    error(err){
    console.log("sum error", err);
}

addPromise(15, 38).then(success, error);
addPromise().then(success, error);
addPromise('x', 2).then(success, error);