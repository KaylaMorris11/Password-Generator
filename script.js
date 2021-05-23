// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseLtrs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLtrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];



function writePassword() {
  var password = "";
  var wantUpperCase = true;
  var wantLowerCase = true;
  var wantNumbers = true;
  var wantSymbols = true;

  var length = prompt("How many characters do you want in your password?");


  if (length < 8 || length > 128) {
    alert("Password must be 8 to 128 characters long.")
  }
  else {
    wantUpperCase = confirm("Do you want lower case letters in your password?")
    wantLowerCase = confirm("Do you want numbers in your password?")
    wantNumbers = confirm("Do you want numbers in your password?")
    wantSymbols = confirm("Do you want symbols in your password?")
  }


  return password;
}

var password = generatePassword();

var passwordText = document.querySelector("#password")



passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

