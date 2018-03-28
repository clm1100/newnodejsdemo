var Person = function(name) {
    this.name = name;
};

Person.prototype.speak = function() {
    console.log('你好!');
};

var SpeakEnglish = function(person) {
    this.person = person;       
};

SpeakEnglish.prototype.speak = function() {
    this.speak();
    console.log('hello!');
};

var SpeakJapanese = function(person) {
    this.person = person;       
};

SpeakJapanese.prototype.speak = function() {
    this.speak();
    console.log('こんにちは!');
};

var lufy = new Person('lufy');
var engLufy = new SpeakEnglish(lufy);
var japanLufy = new SpeakJapanese(engLufy);
japanLufy.speak();