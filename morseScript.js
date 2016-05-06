var inputEntered = prompt("Enter what you want translated: ");

var characterArrayOfInput = [];
characterArrayOfInput = inputEntered.split('');

var alphabet = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e"	: ".",
  "f": "..-.",
  "g":"--.",
  "h"	:"....",
  "i"	:"..",
  "j":".---",
  "k":"-.-",
  "l":".-..",
  "m":"--",
  "n":"-.",
  "o":"---",
  "p":".--.",
  "q":"--.-",
  "r":".-.",
  "s":"...",
  "t":"-",
  "u"	:"..-",
  "v":"...-",
  "w"	:".--",
  "x":"-..-",
  "y":"-.--",
  "z":"--..",
  " ":"/"

}


var morseCodeOutput = [];

for(var i = 0; i < characterArrayOfInput.length; i++){
  var arrayElement = characterArrayOfInput[i].toLowerCase();
  morseCodeOutput[i] =  alphabet[arrayElement];
}
var finalOutput = morseCodeOutput.join(" ");
document.getElementById("result").innerHTML = finalOutput;
console.log(morseCodeOutput);
console.log(finalOutput);
