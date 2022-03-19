

function add(a, b) {
    return a + b;
}


function add(a,b) {
  return a + b;
}

let sum = add(10, 20);
console.log("sum:", sum);

function compare(a, b) {
    if (10 > 100) {
        return -1;
    } else if (10 < 100) {
        return 1;
    }
    return 0;
}
console.log("This is text and " + sum);
 

var myNumber = 42;
if (myNumber == 42)
{
    console.log("the number is correct.");
}

var anything = 1;
var anythone = 2;

if (anything > anythone)
{
    console.log("Bip to the bop! is smaller than bar");
}

var funnyBunny = 25;
var stumblebum = 38;

if (funnyBunny < stumblebum)
{
    console.log("Flubbadub");
}

var callItAnything = 100
var itDoesntMatter = 200

if (callItAnything < itDoesntMatter)
{
    console.log("Scooby-Doo!");
}

var a = 10
var b = 20

if (a < b)
{
    console.log("Super Doobie Rocks!")
}

var anyname = 20
var othername = 40

if (anyname < othername)
{
    console.log("Susie sells sea shells");
}

var doh = 20
var deer = 50

if (doh < deer)
{
console.log("Zippidy Doo!");
}

var thingone = 10
var thingtwo = 20
var thingthree = 30

if (thingone < thingtwo && thingthree > thingone)
{
    console.log(" Thing one is smaller than thing two AND Thing Three is larger than Thing Two");
}
if (thingone || thingtwo > thingthree)
{
    console.log("thing One is smaller than thing three or thing three is larger thing two")
}

var a = 10
var b = 20
var c = 5

if (a < b && c > a)
{
    console.log("A is smaller than b and C and C is larger than B");    
}
if (a || b > c)
{
    console.log("A is smaller than C and C is larger than B");
}

var notTrue = false;
if (!notTrue)
{
    console.log("not not true is true");
}

var ifTrue = true;
if (!ifTrue)
{
    console.log("true is true!");
}

var rank = "Commander";
switch(rank)
{
    case "Private":
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}

var number = "another thing";
switch(number)
{
    case "anything":
        case "something else":
            console.log("What in the world!");
        case "another thing":
            console.log("This is another thing");
        case "waka waka waka":
            console.log("You got the right one baby!");
}

function checkNumber(myNumber)
{
    // TODO: write your code here
    if (myNumber===42)
    {
        console.log("correct");
    }
    else
    {
        console.log("incorrect");
    }
}

checkNumber(3);
checkNumber(7);
checkNumber(42);

function checkThis(aNumber)
{
    if (aNumber===42)
    {
        console.log("Yeah, Baby!");
    }
    else 
    {
        console.log("Tough luck Kiddo!");
    }
}

checkThis(3);
checkThis(7);
checkThis(42);

function anotherTest(again)
{
    if (again===20)
    {   
        console.log("Warp Factor Five, Mr. Scott!");
    }
    else
    {
        console.log("Fire Photon Torpedos, Mr. Sulu!");
    }
}

anotherTest(20);
anotherTest(50);
anotherTest(10);

function testThis(test)
{
    if (test===15)
    {
        console.log("What, what what!");
    }
    else {
        console.log("Pay your money, take your chances!");
        
    }
}

testThis(15);
testThis(25);
testThis(200);

var i;
for (i = 0; i < 3; i = i + 1)
{
    console.log(i);
}

var i;
for (i = 6; i < 10; i = i + 1)
{
    console.log(i);
}

for (var i = 0; i < 3; i++)
{
    console.log(i);
}

var myArray = [ "A", "B", "C"];
for (var i = 0; i <myArray.length; i++)
{
    console.log("The member of myArray in index " + i + " is " + myArray[i]);
}

var i = 99;
while (i -= 0)
{
    console.log(i + "bottles of beer on the wall");
    i -= 1;
}

var i = 99;
while (true)
{
    console.log(i + " bottles of beer on the wall");
    i -=1;
    if (i == 0)
    {
        break;
    }
}

for (var i = 0; i < 100; i++)
{
    //check if the number is even
    if (i % 2 == 0)
    {
        continue;
    }
    // if we got here this i is odd.
    console.log(i + " is an odd number.");
}

var myArray = ["What is the meaning of life?", "The meaning of life is", 42];

//TODO: modify this code
for (var i = 0; i<myArray.length; i++)  
{
    console.log(myArray[i]);
}

var myArray = ["What is the meaning of life?", "the meaning of life is", 42];

for (var i = 0; i<myArray.length; i++)
{
    console.log(myArray[i]);
}


var thisThing = {
    anyName : "Any name can be used for a variable that",
    anotherName: "you want it to be"
}
    console.log(thisThing);

var emptyObject = {};
var personObject = {
    firstName : "john",
    lastName : "Smith"
}
personObject.age = 23;
personObject["salary"] = 14000;

    console.log(personObject);
    console.log(emptyObject);

for (var member in personObject)
{
    if (personObject.hasOwnProperty(member))
    {
    console.log("The member " + member + " of personObject is " + personObject[member])
    }    
}


function say(message) {
    console.log(message);
}
 

var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i);
    console.log(i)
}

var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i);
    console.log(i)
}

var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i);
    console.log(ourArray)
}

if (true) {
    // this will run because true is true
      console.log("Is true true? Yes.");
    }
    
    if (false) {
    // this will not run because false is not true
      console.log("Is false true? No.");
    }
    
    if (3 === 10 || "a" === "a") {
    // this will run because at least one of the conditions is true
      console.log("Does 3 equal 10? No.");
      console.log("Does the letter 'a' equal the letter 'a'? Yes.");
    }
    
    if (3 === 10 && "a" === "a") {
    // this will not run because both conditions have to be true to run
      console.log("Does 3 equal 10? No.");
      console.log("Does the letter 'a' equal the letter 'a'? Yes.");
    }

    {
var a = 2;
var b = 5;
var c= a + b;
document.getElementById("anything").innerHTML = c;
}

{
var a = thisThing;

document.getElementById("thisThing").innerHTML = a;
}

{
var a = 10;
var b = 15;
var c = a + b;

document.getElementById("thisShouldWork").innerHTML = c;
}

function myFunction() {
    document.getElementById("somethingElse").innerHTML = "Now you did it!";
  }
 
{
  let html = document.getElementById("myP").innerHTML;
  document.getElementById("demo").innerHTML = html;
}

{ 
let html = document.getElementById("example").innerHTML;
document.getElementById("example").innerHTML = html;

}

var array = [6, 15, 2, 56, 74, 10000, 74];

function getMax(numberArray) {
    var currentMaxNumber = numberArray[0];
    for(var i = 0; i < numberArray.length; i++) {
        if(numberArray[i] > currentMaxNumber){
            currentMaxNumber = numberArray [i];
        }
    }

    return currentMaxNumber
}

console.log(getMax(array));

var array = [6, 15, 2, 56, 74, 10000, 74];

function getMin(numberArray) {
    var currentMinNumber = numberArray[0];
    for(var i = 0; i < numberArray.length; i++) {
        if(numberArray[i] < currentMinNumber){
            currentMinNumber = numberArray [i];
        }
    }

    return currentMinNumber
}

console.log(getMin(array));

// Var array;

var requestUrl = "https://randomuser.me/api/?results=5";

fetch(requestUrl)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})

var badRequestUrl = "https://api.github.com/orgs/nodejddd/repad";

fetch(badRequestUrl).then(function (response) {
        if (response.status !== 200) {
            document.location.replace("./404.html")
        } else {
            return response.json();
       
})