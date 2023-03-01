function askName(){
    let name = prompt('Enter your name', '');
    return name;
}

function askNum(){
    let num;
    do{
        num = prompt('Enter a numer','');
    }while(isNaN(num));
    return num;
}

function askChoice(){
    let choice;
    do{
        choice = prompt('select odd or even','');
    }while(choice !== 'even' && choice !== 'odd');
    return choice;
}

function isEven(num){
    if(num % 2 === 0){
        return true
    }
    return false;
}

function sumNum(num1, num2){
    let sum = num1 + num2;
    return sum;
}

function randomNumber(max, min){
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    return randomNum;
}

function determineWinner(choice, sum, name){
    if((choice === 'even' && isEven(sum) || (choice === 'odd' && !isEven(sum)))){
        return name;
    }
    return 'computer';
}

function oddEvenGame(){
    const max = 5;
    const min = 1;
    let name = askName();
    let playerNum = askNum();
    let choice = askChoice();
    let computerNum = randomNumber(max, min);
    let sum = sumNum(playerNum, computerNum);
    let winner = determineWinner(choice, sum, name);
    let message = `Il vincitore è ${winner}: ${name}: ${playerNum}, computer: ${computerNum}`;
    return message;
}

let game = oddEvenGame();

console.log(game);






