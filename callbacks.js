var fnCount = 0;
var insertInBody = function (text) {
  var element = document.createElement('div');
  element.innerHTML = ++fnCount + ') ' + text;

  var body = document.getElementById('body');
  body.appendChild(element);
};

function sum(no1, no2, cb) {
  var sum = no1 + no2;
  insertInBody('Sum calculation completed');
  cb(sum);
}

sum(10, 20, function (addedSum) {
  insertInBody('Added sum is ' + addedSum);
});