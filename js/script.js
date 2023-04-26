
function updateSlider(value) {
  document.getElementById("slider").value = value;
}
function updateNumber(value) {
  document.getElementById("length").value = value;
}


const clipboardButton = document.querySelector('#clipboard');
const resultText = document.querySelector('#result');

var finalPassword = "";
// Get DOM elements
const result = document.getElementById('result');
const lengthSlider = document.getElementById('slider');
const passPhraseInput = document.getElementById('passphrase');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

function copyPass(){
  navigator.clipboard.writeText(finalPassword)
  .then(() => {
    resultText.innerHTML = "<p style='color:red;'> Copied!</p>";
    setTimeout(() => {
      resultText.textContent = '';
    }, 2000);
  })
  .catch((err) => {
    resultText.innerHTML = "<p style='color:red;'>Failed!</p>";
  });
}
// Function to generate password
function passwordGenerator(length, uppercase, lowercase, numbers, symbols, passphrase) {
    cnns = [];
    if (uppercase){
        cnns.push('1');
      }else{
        cnns.push('0')
      }
      if (lowercase){
        cnns.push('1');
    }else{
      cnns.push('0')
    }
    if (numbers){
      cnns.push('1');
    }else{
      cnns.push('0')
    }
    if (symbols){
      cnns.push('1');
    }else{
      cnns.push('0')
    }
    password = passwordGenerate(passphrase, length, cnns.join(''));
    return password;
    
  }
  

// Function to update password in real-time
function updatePassword() {
  const length = lengthSlider.value;
  const uppercase = uppercaseCheckbox.checked;
  const lowercase = lowercaseCheckbox.checked;
  const numbers = numbersCheckbox.checked;
  const symbols = symbolsCheckbox.checked;
  const passphrase = passPhraseInput.value;
  
  var password = passwordGenerator(length, uppercase, lowercase, numbers, symbols, passphrase);
  finalPassword = password;
  if (password.length > 16) {
    password = password.substring(0, 16) + ' ...';
  }
  // Update the text content of the result element
  resultText.textContent = password;
  
}


// Attach event listeners
lengthSlider.addEventListener('input', updatePassword);
uppercaseCheckbox.addEventListener('change', updatePassword);
lowercaseCheckbox.addEventListener('change', updatePassword);
numbersCheckbox.addEventListener('change', updatePassword);
symbolsCheckbox.addEventListener('change', updatePassword);
passPhraseInput.addEventListener('input', updatePassword);

// clipboardButton.addEventListener('click', (password) => {
//   // Create a temporary textarea element to hold the password
//   const textarea = document.createElement('textarea');
//   textarea.value = resultText.innerText;
//   document.body.appendChild(textarea);
  
//   // Select the text and copy it to the clipboard
//   textarea.select();
//   document.execCommand('copy');
  
//   // Remove the temporary textarea
//   document.body.removeChild(textarea);
//   resultText.innerHTML = "<p style='color:red;'> Copied!</p>";
//   // Show a confirmation message to the user
//   setTimeout(() => {
//     resultText.textContent = "";
//   }, 1000)
// });
// Function to copy password to clipboard
// function copyIt() {
//   passwordOutput.select();
//   navigator.clipboard.writeText(passwordOutput.value);
// }

// // Attach event listener to copy button
// copyButton.addEventListener('click', copyIt);

// jubrish.value = generatejubrish(lengthSlider.value);
// // program to generate random strings

// // declare all characters

// function generatejubrish(length) {
//     const jub_char ='!@#$%^&*()_+=-ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = ' ';
//     const charactersLength = jub_char.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += jub_char.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }


// function copyJubrish() {
//     const jubrishText = document.getElementById("jubrish").innerText;
//     navigator.clipboard.writeText(jubrishText);
//   }