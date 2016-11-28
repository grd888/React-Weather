// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 3000);
//
//
//
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('promise success', temp);
// }, function(error) {
//   console.log('promise error', error);
// });


function addPromise (a,b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b  === 'number') {
      resolve(a + b);
    } else {
      reject('One or more invalid numbers found,');
    }
  });
}

addPromise(2,"R").then(function(sum) {
  console.log("The sum is " + sum);
}).catch(function(err) {
  console.log(err);
});
