class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        maxSoFar = -1
        for i in reversed(range(len(arr))):
            t = arr[i]
            arr[i] = maxSoFar
            maxSoFar = max(t, maxSoFar)
        return arr

