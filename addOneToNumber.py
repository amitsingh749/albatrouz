class Solution:
    # @param A : list of integers
    # @return a list of integers
    def plusOne(self, A):
        res = []
        res.append(0)
        res.extend(A)
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



print(Solution().plusOne([ 0, 3, 7, 6, 4, 0, 5, 5, 5 ]))
print(Solution().plusOne([ 2, 5, 6, 8, 6, 1, 2, 4, 5 ]))
print(Solution().plusOne([ ]))
print(Solution().plusOne([0]))