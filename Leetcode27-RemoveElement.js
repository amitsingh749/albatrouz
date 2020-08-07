/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
  */
  //Given nums = [3,2,2,3], val = 3,
  //Your function should return length = 2, 
  //with the first two elements of nums being 2.
  //It doesn't matter what you leave beyond the returned length.

var removeElement = function(nums, val) {
    let pt1 = 0;
    let pt2 = nums.length-1;
    while(pt1<=pt2){
    	if(nums[pt2]==val){
    		pt2--
    	}else{
    		if(nums[pt1] == val){
    			let  t = nums[pt1]
    			nums[pt1] = nums[pt2]
    			nums[pt2] = t
    			pt2--
    		}else{
    			pt1++
    		}
    	}    	
    }
    return pt1
};