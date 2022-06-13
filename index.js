// import lengthOfLongestSubstring from "/lengthOfLongestSubstring";




class Parent {
  constructor(name){
    this.name = name;
  }
  getName() {
    return this.name
  }
}

// class Child extends Parent{
//   constructor(props){
//     super(props);
//   }
// }

// let pr = new Parent("dada");


// function Parent (name){
//   this.name = name;
// }
// Parent.prototype.getName = function(){
//   return this.name
// }

// function Children(name){
//   Parent.call(this,name);
// }
// Children.prototype = new Parent();


if(!Function.prototype.bind2){
  Function.prototype.bind2 = function (...args){
    const func = this;
    
    let context = args[0];
    let remainingArgs = args.slice(1);

    return function(...functionInnerParams){
      func.apply(context, [...remainingArgs, ...functionInnerParams]);
    }
  }
}

if(!Array.prototype.reduce2){
  Array.prototype.reduce2 = function(callBack, initialValue) {
    
   this.forEach(item => {
     initialValue = callBack(initialValue,item)
   }) 
  }
}
let valred = [2,3,1].reduce2((acc, next) => acc + next,0);
console.log("valred2",valred);
class Potato {
  constructor(){
    this.someFunction = this.someFunction.bind2(this)
  }
  someFunction  (){
    console.log("this",this);
  }
}
let potato =  new Potato();
potato.someFunction();




// implement getHashCode in String instance

if(!String.prototype.getHashCode){
  String.prototype.getHashCode = function (){
    console.log(this);
  }
}
let s1 = "sample";

console.log(s1.getHashCode());


// use reduce
let arr = [2,3,4,5];
let returnedValue = arr.reduce((prev, current)=>{
  return prev + current;
}, 0)





function flattenArray (arr){
  return arr.reduce((acc, next)=> {
    let isArray =  Array.isArray(next);
    return acc.concat(isArray ? flattenArray(next) : next)
      
  }, [])
}

if(!Array.prototype.flattenArray){
  Array.prototype.flattenArray = function(){
   return flattenArray(this);
  }
}

let multiLevelArr = [1,2,[3,4, [5,6, [7, [8, 9, 10]]]]]
console.log("multiLevelArr", multiLevelArr.flattenArray());




const debounce = (func, wait) => {
  let timeoutid;
  return function exec(...args) {

    clearTimeout(timeoutid);

    timeoutid = setTimeout(() => {
      clearTimeout(timeoutid);
      func(args)
    }, wait);

  }

}
const inputChange = debounce(() => {
  console.log();
}, 300)
for(let i= 0; i < 5; i++){
  inputChange()
}



  //<input onchange={e => inputChange(e.target.value)}
  (function() {

    function divide(a, b) {
      return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
          reject(new Error("Can not be devided by 0"))
        }
        resolve(a / b)
      })
    }

    divide(10, 10).then((res) => {
      console.log(res)
    })

  })();

// const promise = new FakePromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("done in 2 sec")
//   }, 2000)
// })

// function FakePromise(callback) {
//   callback()
// }