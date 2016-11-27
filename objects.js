var fnCount = 0;
var insertInBody = function (text) {
    fnCount++;
    var element = document.createElement('div');
    element.innerHTML = fnCount + '. ' + text;

    var body = document.getElementById('body');
    body.appendChild(element);
};

var gaDimensions = {
    name: 'dimension10',
    value: 'Muhammed'
};

insertInBody(JSON.stringify(gaDimensions));
gaDimensions.value = 'Abdul Kader';
insertInBody(JSON.stringify(gaDimensions));
delete gaDimensions.value;
insertInBody(JSON.stringify(gaDimensions));

var Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.getYearOfBirth = function() {
        return new Date().getFullYear() - this.age;
    };
    this.getNameAndYearOfBirth = function() {
        return 'Year of birth of ' + this.name + ' is ' + this.getYearOfBirth();
    }
};

var user1 = new Person('Muhammad', 31);
insertInBody('Year of birth of ' + user1.name + ' is ' + user1.getYearOfBirth());

var user2 = new Person('Abdul Kader', 32);
insertInBody(user2.getNameAndYearOfBirth());