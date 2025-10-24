// Roll Dice Program

function rollDice(){
    const numDice = document.getElementById("numDice").value;
    const result = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const minDice =1;
    const maxDice=6;

    let values=[];
    let images=[];

    

    for(let i =0; i<numDice; i++){
        result.textConten="";
        let randomDice = Math.floor(Math.random()*(maxDice-minDice+1)+minDice);
        values.push(randomDice);
        images.push(`<img src="dice_images/Dice-${randomDice}.png">`);
    }

    result.textContent=`The result is ${values.join(" ")}`;

    setTimeout(() => {
        diceImages.innerHTML=images.join(" ");
    },400);

}