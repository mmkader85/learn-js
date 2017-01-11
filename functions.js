var fnCount = 0;
var insertInBody = function (text) {
  var element = document.createElement('div');
  element.innerHTML = ++fnCount + ') ' + text;

  var body = document.getElementById('body');
  body.appendChild(element);
};

(function () {
    insertInBody('This is invoked by itself');
  })();

(function (name) {
    insertInBody('Welcome ' + name);
  })('Muhammed');

var add = function (a, b) {
  return a + b;
};

var sum = add(10, 20);
insertInBody('add(10, 20); is ' + sum);

