var game = {
    money: 0,
};

function gain(){
    game.money += 1;
    document.getElementById("amount").innerHTML = game.money;
};