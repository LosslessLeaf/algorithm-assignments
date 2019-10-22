const rl = require("readline-sync");

let game = {
	map: {
		tiles: {}
	},
	players: [],
	playerCount: 0,
	currentPlayerNo: 1,
	currentTile: 0,
	lowAndHighCards: [],
	midCards: [],
	firstAndLastThree: [],
	dice: {
		red: 0,
		black: 0,
		stopValue: 0
	},
	dieRoll: function() {
		Math.floor(Math.random() * 6) + 1;
	},
	addJokers: function() {
		for (let i = 0; i < 2; i++) {
			let card = new Card(0, 0);
			this.lowAndHighCards.push(card);
		}
	},
	getEdgeCards: function() {
		for (let i = 1; i <= 4; i++) {
			for (let j = 1; j <= 13; j++) {
				let card = new Card(i, j);
				this.lowAndHighCards.push(card);

				if (j == 2) {
					j = 10;
				}
			}
		}
	},
	getMidCards: function() {
		for (let i = 1; i <= 4; i++) {
			for (let j = 3; j <= 10; j++) {
				let card = new Card(i, j);
				this.midCards.push(card);
			}
		}
	},
	getFirstAndLastThree: function() {
		this.shuffle(this.midCards);
		for (let i = 0; i < 6; i++) {
			this.firstAndLastThree.push(this.midCards[i]);
		}
		this.midCards.splice(0, 6);
		for (i in this.midCards) {
			this.lowAndHighCards.push(this.midCards[i]);
		}
	},
	pushFirstThree: function() {
		for (let i = 0; i < 3; i++) {
			game.map.tiles[this.currentTile] = this.tile(
				this.firstAndLastThree[i].suit,
				this.firstAndLastThree[i].value,
				this.currentTile
			);
		}
		this.firstAndLastThree.splice(0, 3);
	},
	pushMiddle: function() {
		for (i in this.lowAndHighCards) {
			game.map.tiles[this.currentTile] = this.tile(
				this.lowAndHighCards[i].suit,
				this.lowAndHighCards[i].value,
				this.currentTile
			);
		}
	},
	pushLastThree: function() {
		for (i in this.firstAndLastThree) {
			game.map.tiles[this.currentTile] = this.tile(
				this.firstAndLastThree[i].suit,
				this.firstAndLastThree[i].value,
				this.currentTile
			);
		}
	},
	setMapOrder: function() {
		this.getEdgeCards();
		this.getMidCards();
		this.getFirstAndLastThree();
		this.pushFirstThree();
		this.addJokers();
		this.shuffle(this.lowAndHighCards);
		this.pushMiddle();
		this.pushLastThree();
	},
	tile: function(suit, value, tileNo) {
		if (tileNo < 10) {
			tileNo = "0" + tileNo;
		}
		let tile = new Tile(suit, value, tileNo);
		this.currentTile++;
		return tile;
	},
	showMap: function() {
		let tiles = this.map.tiles;
		for (i in tiles) {
			// console.log(tiles[i]);
			if (tiles[i].value < 10 || isNaN(tiles[i].value) == true) {
				console.log(
					`| ${tiles[i].tileNo} | ${tiles[i].suit} \u0020${tiles[i].value} | `
				);
			} else {
				console.log(
					`| ${tiles[i].tileNo} | ${tiles[i].suit} ${tiles[i].value} | `
				);
			}
		}
	},
	shuffle: pile => {
		shuffleCards(pile);
	},
	replaceSuits: function() {
		// console.log("Hit this");
		let tiles = game.map.tiles;
		for (i in tiles) {
			if (tiles[i].suit == 1) {
				tiles[i].suit = "♧";
			} else if (tiles[i].suit == 2) {
				tiles[i].suit = "♡";
			} else if (tiles[i].suit == 3) {
				tiles[i].suit = "♢";
			} else if (tiles[i].suit == 4) {
				tiles[i].suit = "♤";
			} else {
				tiles[i].suit = "";
			}
		}
	},
	replaceFaces: function() {
		let tiles = game.map.tiles;
		for (i in tiles) {
			if (tiles[i].value == 0) {
				tiles[i].value = "J";
			} else if (tiles[i].value == 1) {
				tiles[i].value = "A";
			} else if (tiles[i].value == 11) {
				tiles[i].value = "J";
			} else if (tiles[i].value == 12) {
				tiles[i].value = "Q";
			} else if (tiles[i].value == 13) {
				tiles[i].value = "K";
			}
		}
	},
	getName: function() {
		let name = rl.question(`Player ${game.currentPlayerNo} name: `);
		let pieceArray = [];

		for (let i = 0; i < 3; i++) {
			let piece;
			if (this.currentPlayerNo == 1) {
				if (i == 0) {
					piece = new Piece("♜", -1, i);
					pieceArray.push(piece);
				} else if (i == 1) {
					piece = new Piece("♝", -1, i);
					pieceArray.push(piece);
				} else if (i == 2) {
					piece = new Piece("♞", -1, i);
					pieceArray.push(piece);
				}
			} else if (this.currentPlayerNo == 2) {
				if (i == 0) {
					piece = new Piece("♖", -1, i);
					pieceArray.push(piece);
				} else if (i == 1) {
					piece = new Piece("♗", -1, i);
					pieceArray.push(piece);
				} else if (i == 2) {
					piece = new Piece("♘", -1, i);
					pieceArray.push(piece);
				}
			}
		}

		let player = new Player(name, pieceArray, this.currentPlayerNo);
		this.players.push(player);
		game.currentPlayerNo++;
	},
	getPlayerCount: function() {
		let playerCount = rl.question(`How many players? 
1) 2
2) 4 
`);
		game.playerCount = playerCount;
	},
	showPlayers: function() {
		// console.log(game.players);
		for (let i = 0; i < game.players.length; i++) {
			console.log(
				`Player ${game.players[i].playerNo}: ${game.players[i].name}`
			);
			console.log(
				`Piece: 1) ${game.players[i].pieces[0].symbol}  2) ${game.players[i].pieces[1].symbol}  3) ${game.players[i].pieces[2].symbol}`
			);
			// for (let j = 0; j < game.players[i].pieces.length; j++) {
			// 	console.log(
			// 		`Piece ${game.players[i].pieces[j].number}: ${game.players[i].pieces[j].symbol}`
			// 	);
			// }
		}
		// console.log(game.players);
		// let player = game.players.playerNo[currentPlayer - 1];
		// console.log("Name: " + player.name);
		// console.log("Player #: " + player.playerNo);
	},
	showPieces: function(player) {
		for (let i = 0; i < game.players.length; i++) {
			for (let j = 0; j < game.players[i].pieces.length; j++) {
				console.log(
					`Piece ${game.players[i].pieces[j].number}: ${game.players[i].pieces[j].symbol}`
				);
			}
		}
	},
	filler: function() {
		for (let i = 0; i < 3; i++) {
			console.log(`=v=v===v====v=v==v=v====v==v=`);
			console.log(`=============================`);
		}
	}
};

function Card(suit, value) {
	this.suit = suit;
	this.value = value;
}

function Tile(suit, value, tileNo) {
	this.suit = suit;
	this.value = value;
	this.tileNo = tileNo;
}

function Player(name, pieces, currentPlayerNo) {
	this.name = name;
	this.pieces = [];
	for (i in pieces) {
		this.pieces[i] = pieces[i];
	}
	this.playerNo = currentPlayerNo;
}

function Piece(pieceSymbol, piecePos, pieceNo) {
	this.number = pieceNo;
	this.symbol = pieceSymbol;
	this.tileNo = piecePos;
}

function shuffleCards(array) {
	let cardsLeft = array.length;
	let randomCardPosition = 0;
	let tempCard;
	while (cardsLeft) {
		randomCardPosition = Math.floor(Math.random() * cardsLeft--);

		tempCard = array[cardsLeft];

		array[cardsLeft] = array[randomCardPosition];
		array[randomCardPosition] = tempCard;
	}
	return array;
}

// get two players
// get four players

game.setMapOrder();
game.getPlayerCount();
game.getName();
game.getName();
game.filler();
game.showPlayers();
// game.showPieces(1);
game.replaceSuits();
game.replaceFaces();
game.showMap();

// game.setUpGame();
