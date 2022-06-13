

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


