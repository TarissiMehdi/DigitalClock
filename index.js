// Random Password Generator 

function generate(){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers ="0123456789";
    const symbols ="&-_@$!§?<>";

    const passwordLength = 12;
    const includeLowerCase = document.getElementById("allowLower");
    const includeUpperCase = document.getElementById("allowUpper");
    const includeNumbers = document.getElementById("allowNumbers");
    const includeSymbols = document.getElementById("allowSymbols");
    const passwordInsert = document.getElementById("passwordGen");

    let allowedChars ="";
    let password = "";

    allowedChars+= includeLowerCase.checked ? lowercaseChars : "";
    allowedChars+= includeUpperCase.checked ? uppercaseChars : "";
    allowedChars+= includeNumbers.checked ? numbers : "";
    allowedChars+= includeSymbols.checked ? symbols : "";

    if(passwordLength<=0) passwordInsert.textContent= "(length should at least be 1)";
    if(allowedChars.length===0) passwordInsert.textContent= "(at least one set of characters should be selected)";

    for (let i =0;i<passwordLength;i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }
    passwordInsert.textContent= `Your generated password is ${password}`;
}








