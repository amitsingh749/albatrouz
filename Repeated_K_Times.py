'''
# Sample code to perform I/O:

name = input()                  # Reading input from STDIN
print('Hi, %s.' % name)         # Writing output to STDOUT

# Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
'''

# Write your code here
def sol(n, arr, k):
    occMap = {}
    for a in arr:
        if a in occMap:
            occMap[a] += 1
        else:
            occMap[a] = 1
    res = None
    for a in occMap:
        if occMap[a] == k:
            if res is None:
                res = a
            else:
                res = min(res, a)

    return res


n = int(input())
x = input()
arr = map(int, filter(None, x.split(' ')))
k = int(input())


print(sol(n, arr, k))