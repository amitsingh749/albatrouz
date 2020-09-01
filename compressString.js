var compressString = function(s){
    if(s.length  <= 2) return ''
    let compressedstr = ''
    let count = 0
    for(let i=0;i<s.length; i++ ){
        if(i==0){
            compressedstr +=s[i]
            count++
            continue
        }
        if(s[i]==s[i-1]){
            count++
        }else{
            compressedstr +=count+''
            count=1
            compressedstr +=s[i]
        }
    }
    compressedstr +=count+''
    if(s.length > compressedstr.length){return compressedstr}else{return s}
}


console.log(compressString('aabcccccaaa'))
// would become a2blc5a3.
console.log(compressString('aBdalkD'))
//a1B1d1a1l1k1D1 = return origenal