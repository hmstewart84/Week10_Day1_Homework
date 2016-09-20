var name = 'Keith';

var printName = function() {    //defining the function
    console.log('My name is ' + name );
}     //curly braces wrap around code in the function

printName();

//will print My name is Keith


score = 5;  //if this had var in front of it, it could be seen anywhere but it doesn't

var result = function() {
    var score = 3;  //this local variable would take priority anyway
    return score;
}

console.log(result());

//will print 3


var myAnimals = ['Chickens', 'Cats', 'Rabbits'];  //these won't be used

var listAnimals = function() {
    myAnimals = ['Ducks', 'Dogs', 'Lions'];
    for(var i=0;i<myAnimals.length; i++){  //if the index is less than the array length, go through the array
      console.log(i + ": " + myAnimals[i]);  //print the index number: then the animal
    }
}

listAnimals();

//will print
//0: Ducks
//1: Dogs
//2: Lions

var suspectOne = 'Jay'; //global variable
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
    var suspectThree = 'Harvey' //this is the only place that can access Harvey
    console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

//Suspects include: Jay, Val, Harvey, Rick
//Suspect three is: Keith

var detective = {
        name : 'Ace Ventura',
        pet : 'monkey'
    }

var printName = function(detective) {
    return detective.name
}

var detectiveInfo = function() {
    detective['name'] = 'Poirot'
    return printName(detective);
}

console.log(detectiveInfo());

//will print Poirot but this one is tricky

var murderer = 'rick'; //this is the global variable.

var outerFunction = function(){
    var murderer = 'marc'; //not sure why this local variable doesn't take precedence.

    var innerFunction = function(){
        murderer = 'valerie';
    }

    innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);//apparently because this is outside the outer function the result is rick