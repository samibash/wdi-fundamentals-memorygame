var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];
var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
        } else {
        console.log("Sorry, try again.");
        }
};
var flipCard = function() {
    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);    
    console.log("User flipped " + cards[cardId].rank);
    checkForMatch();
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
};

document.getElementsByTagName('data-id')[0].setAttribute('card-img', cards.cardImage);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
}
else {
    alert("Sorry, try again.");
};

    var createBoard = function() {
    for (var i = 0; i < cardsInPlay.length; i++) {
        var cardElement = [ 
            document.createElement('img'),
            document.createElement('img'),
            document.createElement('img'),
            document.createElement('img')
        ];
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board')[0].appendChild(cardElement);
    };
    createBoard();
}