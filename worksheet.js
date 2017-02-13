// NORMAL MODE ( 0 - 4 )


// Part 0 

// Write a function called flipColor. This function may be 
// used to change the color of a tile in a game. It should 
// take as input an object. If that object's color property
// has the value blue, it should change it to red, and 
// vice-versa.

// see test.js for example usage
function flipColor(object){
    if (object.color==='blue'){
        object.color = 'red'
    }
    else if (object.color==='red'){
        object.color='blue'
    }
    return object
}


// Part 1

// Write a function called getFullNames that takes an array 
// of objects with first and last names and returns an array 
// of strings, where each string is a customer's full name.

// see test.js for example usage
var testArray = [{first: 'Laurent',last: 'Nocca'},{first: 'James',last: 'Harden'}]

function concatenatedNames(object){
    var result = object.first + " " + object.last
    return result
}

function getFullNames(arrayOfObjects){
    var arrayOfString = []
    for (var i = 0; i<arrayOfObjects.length; i++){
        arrayOfString.push(concatenatedNames(arrayOfObjects[i]))
    }
    return arrayOfString
}

// Part 2

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. The dog *constructor* 
// (which is, almost, what this is) should take a name input, and the dog should receive the 
// assigned name.

// Give the dog a method called .speak(). speak() should receive a string as input and 
// return a new version of that string where the first letter of every word is replaced 
// with the letter 'r'.


// see test.js for example usage
function replaceWithR (string){
    var newWord = "r" + string.substring(1,string.length)
    return newWord
}

function generateDog(dogName){
    var dog = {
        name: dogName,
        legs: 4,
        color: 'golden',
        speak: function(string){
            var dogSentence = ''
            var stringArray = string.split (' ')
            for (var i = 0; i < stringArray.length; i++){
                var updatedWord = replaceWithR(stringArray[i])
                dogSentence += ' ' + updatedWord
            }
            return dogSentence.trim()
        }   
    }
    return dog
}


// Part 3

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
// pluck(stooges, 'name') should yield the array, ['moe','larry','curly']

// see test.js for example usage

function pluck(arrayOfObjects, property){
    var propertyArray = []
    for (var i = 0; i<arrayOfObjects.length; i ++){
        propertyArray.push(arrayOfObjects[i][property])
        }
    return propertyArray
}

// Part 4

// Write a function called getCounts that takes a string of text as input and returns
// an object which stores the frequency of each word in the string.

// Note that your counts should NOT be case-sensitive.


// check test.js for examples of how this function should be used.
function getCounts(string){
    var lowerCaseString = string.toLowerCase()//lower case all string
    var stringArray = lowerCaseString.split(/\W+/)//split string into array. looked up the regex to ignore punctuation etc..
    var wordCount= {}
    var counter = 0 //counter starsts at 0
    for (var i = 0; i< stringArray.length; i++){
       for (var j = 0; j < stringArray.length; j++){
           if (stringArray[i]===stringArray[j]){//compare the same array to itself if word is discovered to equal itself just once, then it's only there once
               counter ++
               }
       }
               wordCount[stringArray[i]]=counter
               counter = 0
    }
    return wordCount
}

// ADVENTURE MODE ( 5 - 8 )

// for these problems you will need to use the for-in loop


// Part 5

// Write a function called reverseObject(). It should take as input an object, 
// and it should output a new object where the keys and values are reversed.


// var object = {
//     occupants: 4,
//     apartment_no: "2b",
//     structural_integrity: "failing"
// }
// reverseObject(object) should yield: 
// {
//   4: 'occupants',
//   2b: 'apartment_no',
//   failing: 'structural_integrity'
// }
function reverseObject(object){
    var newObject = new Object()
    for (var prop in object){
        newObject.var = prop
    }
    
    return newObject
}

// Part 6

// Write a function called reverseAll(). It should take as input an array of 
// objects, and it should output an array of objects with the keys and values
// reversed.

var users = [{obama: 'president@gmail.com',hobby: 'basketball'},{trump: 'americamoneywin@yahoo.com', hobby:'dealmaking'},{bush: 'jeb!@hotmail.com',hobby:'portraiture'}]
// should yield: [{'president@gmail.com': 'obama',basketball: 'hobby'}, ....]

// Part 7

// Write a function where() that takes two inputs, a list of objects and 
// a properties object. It should return a new list containing only those
// objects that meet the key-value conditions in the properties object.

var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]

