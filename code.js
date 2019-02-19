function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//162 cards, 2 sides each = 324 faces.
//We want to select a single side: range is 0 to 323
function pickRandomCard() {
  return Math.floor(Math.random() * 162 * 2);
}

//words are in words.js file as "words" array
//every 12 words is one card (front and back)
//first 6 from the brown side of the card, the next 6 from the green side
function getCardContents(cardNum) {
  let items = 6;
  let list = document.createElement("ol");
  cardStyle = cardNum % 2 == 0 ? "odd" : "even";
  list.classList.add(cardStyle);
  for (let i = 0; i < items; i++) {
    let item = document.createElement("li");
    item.innerHTML = words[cardNum * items + i];
    list.append(item);
  }
  return list;
}

function nextCard() {
  let card_i = pickRandomCard();
  cardContents = getCardContents(card_i);

  let number = document.getElementById("number");
  let n = document.createTextNode("(" + card_i + ")");
  if (number.childNodes.length == 0) number.append(n);
  else {
    let old_n = number.firstChild;
    number.replaceChild(n, old_n);
  }
  number.append(n);

  let card = document.getElementById("card");

  if (card.childNodes.length == 0) card.append(cardContents);
  else {
    let old_card = card.firstChild;
    card.replaceChild(cardContents, old_card);
  }
}

nextCard();
