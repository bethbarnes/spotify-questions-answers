function sortByStrings(s,t){
  let sortedStr = ''
  for(let i = 0; i < t.length; i++){
    let currLetter = t[i]
    for(let k = 0; k < s.length; k++){
      if(s[k] === currLetter){
        sortedStr += s[k]
      }
    }
  }
  return sortedStr
}

//The time complexity of this solution is O(t*s), where t length of t and s length of s

//The space complexity is O(s), where s is the # of letters in s, because we are storing a variable, 'sortedStr', which grows proportional to s

// I optimized my solution below, using bubblesort, to improve space complexity and best case scenario time complexity

function sortByStrings2(s, t){
  let beenSwapped = true
  while(beenSwapped){
    beenSwapped = false;
    for(let i = 0; i < s.length-1; i++){
      if(t.indexOf(s[i]) > t.indexOf(s[i+1])){
        s = swap(s, i, i+1)
        beenSwapped = true
      }
    }
  }
  return s
}

function swap(str, idx1, idx2){
  let arr = str.split('')
  let char1 = str[idx1];
  let char2 = str[idx2]
  arr[idx1] = char2;
  arr[idx2] = char1
  str = arr.join('')
  return str
}

// I implemented this using bubblesort. Time complexity would be O(N^2) in the worst case if the string was in completely backwards order and we have to iterate over every index N times.

//Best case time complexity is O(N), where the array is already sorted and we only need to iterate through once.
