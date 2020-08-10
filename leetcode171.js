/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  
	let map = new Map()
	
	map['A'] = 1
	map['B'] = 2
	map['C'] = 3
	map['D'] = 4
	map['E'] = 5
	map['F'] = 6
	map['G'] = 7
	map['H'] = 8
	map['I'] = 9
	map['J'] = 10
	map['K'] = 11
	map['L'] = 12
	map['M'] = 13
	map['N'] = 14
	map['O'] = 15
	map['P'] = 16
	map['Q'] = 17
	map['R'] = 18
	map['S'] = 19
	map['T'] = 20
	map['U'] = 21
	map['V'] = 22
	map['W'] = 23
	map['X'] = 24
	map['Y'] = 25
	map['Z'] = 26
	let sum = 0


	for(let i=1; i<s.length; i++){
		
		sum =sum*26 + map[a]
	}

	return sum
};