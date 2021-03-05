function isodd(n){
	return n%2==1;
}

function pb157(s){
	if(s.length<3){
		return true;
	}
	let map = new Map();
	for(let i=0;i<s.length;i++){
		if(map.has(s[i])){
			map.set(s[i], map.get(s[i])+1);
		}else{
			map.set(s[i],1);
		}
	}
	//console.log(map);
	let oddcount = 0;

	for (const [key, value] of map.entries()) {

      	if(isodd(value)){
			oddcount++;
		}
    }



	return oddcount<=1;

}

console.log(pb157('daily'))
console.log(pb157('carrace'))
