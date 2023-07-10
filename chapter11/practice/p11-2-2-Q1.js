// 11.2.2. Check Your Understanding
// Question: Convert the following named function to an anonymous function that is stored in a variable.

function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}

console.log(reverse("LaunchCode"));