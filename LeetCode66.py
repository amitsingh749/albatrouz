class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        res = []
        res.append(0)
        res.extend(digits)
        for i in range(len(res)-1, -1, -1):
            if res[i]+1 <= 9:
                res[i] = res[i]+1
                break
            else:
                res[i] = 0
        
        count = 0
        for i in range(0, len(res)):
            if res[i] == 0:
                count += 1
            else:
                break
        

        return res[count:]
        