
const twoSum = function(nums, target) {
   let mymap = new Map();

for(let i =0; i< nums.length; i++){
  let currentNumber = nums[i];
  let requiredNumber = target - currentNumber;
  if(mymap.has(requiredNumber)){
    return [mymap.get(requiredNumber), i, ]
  }else{
    mymap.set(currentNumber,i)
  }
}

};


let nums = [2, 7, 10, 1, 11, 15, 9]
let target = 11

console.log(twoSum(nums, target));
