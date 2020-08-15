OnesCompliment = (str) => {
    console.log(str)
    let OneComp = ''
    
    for(let a of str){
        if(a == '1')OneComp +='0'
        if(a == '0')OneComp +='1'
    }

    return OneComp

};
console.log(OnesCompliment('1001'));