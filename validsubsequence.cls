 public class validSubsequenceSolution {    
    private static boolean isValidSubsequence(Integer[] sequence, Integer[] subSequence){
        Integer sptr = 0;
        Integer subPtr = 0;
        while (sptr < sequence.size() ){          
            if(sequence[sptr] == subSequence[subPtr]){
                ++sptr;
                ++subPtr;
            }else{
                ++sptr;
            }
            if (subPtr == subSequence.size()){
                return True;
            }
        }
        return False;
    }  
}