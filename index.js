function isPalindrome(word) {
  // Write your algorithm here
  var reverseWord = word.split("").reverse().join('')
  if (reverseWord == word){
      return true
  }
  else if(word.split('').length<2){
      return false

  }
  else{
      return false
  }
}

/* 
  Add your pseudocode here
  
  reverse the input string
  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");
}

module.exports = isPalindrome;
