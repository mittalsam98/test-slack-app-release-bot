/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let len = nums.length;
  const a ={};

   for(let i=0; i<len; i++){
    if(!a[nums[i]]){
        a[nums[i]]=i
    }
  }

  console.log({a})

  console.log('baap ka sab badl lega');

  for(let i=0; i<len; i++){
    const diff  = target- nums[i];
    if(a[diff] && a[diff]!==i){
        return [i, a[diff]]
    }
  }

};
