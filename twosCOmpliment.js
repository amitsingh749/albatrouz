OnesCompliment = (str) => {
    console.log(str)
    let OneComp = ''
    
    for(let a of str){
        if(a == '1')OneComp +='0'
        if(a == '0')OneComp +='1'
    }

    return OneComp

};


TwosCompliment = (str) =>{
    let str1 = OnesCompliment(str)
    str1 = str1.split('') //converted to array because js srings are immutable
    //first we need 1's cmp We traverse the one’s complementstarting from LSB (least significant bit),
    // and look for 0. We flip all 1’s (change to 0) untilwe find a 0. Finally, we flip the found 0. 
	console.log(str1 )
    for(let i=str1.length-1; i>=0; i--){
      console.log(str1[i])
        if(str1[i]=='0'){
            str1[i] = 1
           console.log('='+str1[i])
            break
        }
        else{
            str1[i] = '0'
        }

    }
    return str1.join('')

}
console.log(TwosCompliment('0111'));