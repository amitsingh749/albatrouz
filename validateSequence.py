class sol(object):
    def validateSeq(self, arr, sub):
        if len(sub) > len(arr):
            return False
        ptrSub = 0
        for a in range(0, len(arr)):
            if arr[a] == sub[ptrSub]:
                ptrSub += 1
                if ptrSub == len(sub):
                    return True
        return False                   

print(sol().validateSeq([5,1,22,25,6,-1,8,10],[1,6,-1,10]))