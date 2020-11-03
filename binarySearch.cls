 public class binarySearchSolution {    
    private static boolean binarySearch(Integer[] arr,Integer target){  
        Integer low = 0;
        Integer high = arr.size()-1;
        return binarySearchHelper(arr, target, low, high);
    }
    private static boolean binarySearchHelper(Integer[] arr, Integer target, Integer low, Integer high){
        if(low > high){
            return False;
        }
        Integer mid = (low + high )/2;
        if(arr[mid] == target){
            return True;
        }else if(arr[mid] > target){
            high = mid -1;
            return binarySearchHelper(arr, target, low, high);
        }else{
            low = mid +1;
            return binarySearchHelper(arr, target, low, high);
        }
    }

}