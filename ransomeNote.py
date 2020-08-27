class sol(object):
    def canSpell(self, magzine, word):
        charDict = {}
        for a in magzine:
            if a in charDict:
                charDict[a] += 1
            else:
                charDict[a] = 1

        for a in word:
            if a in charDict:
                if charDict[a] is 0:
                    return False
                else:
                    charDict[a] -= 1
            else:
                return False
        
        return True

print(sol().canSpell(['a', 'b', 'a', 'c'], 'abaa'))
        
