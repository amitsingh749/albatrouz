 public class threeNoSumSolution {    
        private static boolean threeNoSum(Integer[] arr, Integer target){
        arr.sort();
        for(Integer i = 0; i<arr.size()-2; ++i){
            Integer left = i +1;
            Integer right = arr.size()-1;
            while(left<right){
                Integer cSum = arr[i] + arr[left] + arr[right];
                if(target == cSum){
                    return True;
                }else if(target > cSum){
                    ++left;
                }else{
                    --right;
                }
            }
        }
        return False;
    }
}