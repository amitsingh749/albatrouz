/**
 * @param {string[]} words
 * @return {number}
 */

let map = {}
map['a'] = '.-'
map['b'] = '-...'
map['c'] = '-.-.'
map['d'] = '-..'
map['e'] = '.'
map['f'] = '..-.'
map['g'] = '--.'
map['h'] = '....'
map['i'] = '..'
map['j'] = '.---'
map['k'] = '-.-'
map['l'] = '.-..'
map['m'] = '--'
map['n'] = '-.'
map['o'] = '---'
map['p'] = '.--.'
map['q'] = '--.-'
map['r'] = '.-.'
map['s'] = '...'
map['t'] = '-'
map['u'] = '..-'
map['v'] = '...-'
map['w'] = '.--'
map['x'] = '-..-'
map['y'] = '-.--'
map['z'] = '--..'

var uniqueMorseRepresentations = function(words) {
  let set = new Set()
  for(let a of words){
    let code = ''
    
    for(let a1 of a){
      code +=map[a1]
    }
      
    set.add(code)
    
  }
  return set.size
};
