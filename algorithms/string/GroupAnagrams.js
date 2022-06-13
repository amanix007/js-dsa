export default function() {

  
var groupAnagrams = function(strs) {
    let groupedAnagram = [];
  let map = new Map();
  for(let string of strs){
    let sorted = [...string];
    sorted = sorted.sort();
    sorted = sorted.join("");
    if(map.has(sorted)){
      map.get(sorted).push(string);
    }else{
      map.set(sorted, [string])
    }
    
    
  }
  console.log(map.entries())
  return [];
};

  console.log("groupAnagrams",groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
  

}


// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

// var _ = require('underscore');

// var evens = _.reject([1, 2, 3, 4, 5, 6], (num) => num % 2 != 0);

// console.log("Evens");
// console.log(evens);




