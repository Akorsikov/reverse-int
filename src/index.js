module.exports = function reverse (n) {
    
  return n > 0 ? [... String(n)].reverse().join('') : [... String(-n)].reverse().join('');
}
