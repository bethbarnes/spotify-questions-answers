// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(s){
  let strings = [];
  let nums = [];

//iterate through each index in the code
  for(let i = 0; i < s.length; i++){

    if (isNumber(s[i])){
      let k = 1
      while (isNumber(s[i+k])){ //while the next character is a number, keep checking the next, until it is not a number. Ensures that this works for numbers longer than 1 integer
        k++
      }
      nums.push(Number(s.slice(i,i+k)))

      if(k > 1) i += k-1 //if the number was more than one integer long, we do not want to iterate over the next k character, otherwise this will add duplicates to out nums array
    }

    else if (isString(s[i])){
      let j = 1
      while (isString(s[i+j])){ //while the next character is a string, keep checking the next, until it is not a string, so we get the whole string
        j++
      }
      strings.push(s.slice(i,i+j))
            //same logic as above
        if(j > 1) i += j-1
    }
    else if (s[i] === '['){
      continue //this does nothing, I added for clarity's sake
    }
    else if (s[i] === ']'){
      //this means we are at the end of one of the strings we must repeat
      let currLetter = strings.pop()
      let newStr = ''
      let currCount = nums.pop()

      for (let i = 0; i < currCount; i++){
        newStr += currLetter
      }
      if(strings.length){
        strings[strings.length-1] += newStr
        //add this repitition to the end of the next string to be repeated
      }else {
        //this means we're at the end and should return
        return newStr
      }
    }
  }
}

function isNumber(num){
  //Number(string) returns isNaN
  //isNaN checks if it returns NaN
  if (isNaN(Number(num))) return false
  return true
}

function isString(str){
  if(isNaN(Number(str))===true && '[]'.indexOf(str) === -1){
    return true
  }
  return false
}
