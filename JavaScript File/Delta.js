const passwordBox = document.getElementById("password");
const icons = document.getElementById("icon");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "1234567890";
const symbol = "@#$%^&*()_+~|/,?-=><.[]";

const allChars = upperCase + lowerCase + Numbers + symbol;

function randomFunction() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += Numbers[Math.floor(Math.random() * Numbers.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while(length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

// Copy password
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy"); 
  icons.style.color = "blue";
}
  
  // button.addEventListener("click", ()=> {
  //   randomFuction();
  // })