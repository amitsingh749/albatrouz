class Solution {
    public int findNumbers(int[] nums) {
        int count = 0;
        for(int num : nums){
            count += solve(num);
        }
        return count;
    }
    
    private int solve(int num){
        int c = 0;
        while(num>0){
            c++;
            num = num/10;
        }
        if(c%2==0){
            return 1;
        }else{
            return 0;
        }
    }
}