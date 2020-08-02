var maxSumOfSubArray = function(arr, k) {
    let pt1 = 0
    let max = 0
    let sum = 0
    for (let pt2 = 0; pt2 < arr.length; pt2++) {
        sum += arr[pt2]

        if(pt2>=k-1){
           max = Math.max(max, sum)
           sum -= arr[pt1] 
           pt1++
        }
           
        
    }
    return max

}

console.log(maxSumOfSubArray([2, 4, 5, 1, 3, 12], 3))
console.log(maxSumOfSubArray([2,3,4,1,5], 2))
