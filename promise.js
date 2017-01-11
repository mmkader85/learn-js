var fnCount = 0;
var insertInBody = function (text) {
  var element = document.createElement('div');
  element.innerHTML = ++fnCount + ') ' + text;

  var body = document.getElementById('body');
  body.appendChild(element);
};

insertInBody('Sync code 1');
var promise1 = new Promise(
  function (resolve, reject) {
    var asyncTime = 2000;
    insertInBody('Begin Async code. It will be completed in ' + asyncTime + 'ms');

    setTimeout(function () {
      var randomNum = Math.floor(Math.random() * 5),
        isImperfectModulo = randomNum % 2;

      if (isImperfectModulo) {
        var errorMsg = new Error(randomNum + ' is not perfect modulo of 2');
        reject(errorMsg);
      }
      else {
        var successMsg = randomNum + ' is perfect modulo of 2';
        resolve(successMsg);
      }
    }, asyncTime);
  }
);

promise1
  .then(function (msg) {
    insertInBody(msg);
  })
  .catch(function (error) {
    insertInBody(error.name + ' occurred. ' + error.message);
  });

insertInBody('Sync code 2');
