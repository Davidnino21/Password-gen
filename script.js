//Variables being declared for different characters
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
var numeric = "0123456789"
var specialChars = "!@#$&*?_-"
//chars variable stores the selected set based on users choice
var chars = "";

//the generatePassword fuction is defined. this function is called when generate password button is clicked.
  function generatePassword() {
    var passwordLength = prompt("How many characters would you like your password to contain?");
    if (passwordLength.length > 0) {
      passwordLength = parseInt(passwordLength)
    } else {
      passwordLength = 0;
    }
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length cant be less than 8 or more than 128")
      passwordLength = prompt("How many characters would you like your password to contain?");
    }
  
  var specialCharacters = confirm("Click OK to confirm including special characters.");
  var numericCharacters = confirm("Click OK to confirm including numeric characters.");
  var lowercase = confirm("click OK to confirm including lowercase characters.");
  var uppercase = confirm("click OK to confirm including uppercase characters.");

  if (specialCharacters == true) {
    console.log('before', chars);
    chars = chars + specialChars;
    console.log('after', chars);
  }
  if (numericCharacters == true) {
    console.log('before', chars);
    chars = chars + numeric;
    console.log('after', chars);
  }
  if (lowercase == true) {
    console.log('before', chars);
    chars = chars + lowerCaseChars;
    console.log('after', chars);
  }
  if (uppercase == true) {
    console.log('before', chars);
    chars = chars + upperCaseChars;
    console.log('after', chars);
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  writePassword(password);
}

function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", generatePassword)






