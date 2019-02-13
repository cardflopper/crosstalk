//questions are in separate file as questions[]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandomCard() {
    return Math.floor(Math.random() * 162*2);
}

function getCardContents(cardNum){
	let items = 6;
	let list = document.createElement("ul");
	cardStyle = cardNum%2==0?"odd":"even";
	list.classList.add(cardStyle);
	for(let i=0;i<items;i++){
		let item = document.createElement("li");
		item.innerHTML = words[cardNum*items+i];
		list.append(item);
	}
	return list;
}

function nextCard() {
    let card_i = pickRandomCard();
    cardContents = getCardContents(card_i);

    let card = document.getElementById("card");
	card.innerHTML="";
	card.append(cardContents);
}

nextCard();








