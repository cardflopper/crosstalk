//162 cards, 2 sides each = 324 card faces.
//We want to select a single face: index is 0 to 323
function pickRandomCard() {
  return Math.floor(Math.random() * 162 * 2);
}

//words are in words.js file as "words" array
//every 12 words is one card (front and back)
//first 6 from the brown side of the card, the next 6 from the green side
function getCardContents(cardNum) {
  let n = 6;
  let ol = document.createElement("ol");
  cardStyle = cardNum % 2 == 0 ? "odd" : "even";
  ol.classList.add(cardStyle);
  for (let i = 0; i < items; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(words[cardNum * n + i]);
    li.append(text);
    ol.append(li);
  }
  return ol;
}

function nextCard() {
  let rnd = pickRandomCard();
  

  let number = document.getElementById("number");
  let n = document.createTextNode("(" + rnd + ")");
  
  if (number.childNodes.length == 0) number.append(n);
  else {
    let old_n = number.firstChild;
    old_n.replaceWith(n);
  }

  let card = document.getElementById("card");
  cardContents = getCardContents(rnd);
  if (card.childNodes.length == 0) card.append(cardContents);
  else {
    let old_card = card.firstChild;
    old_card.replaceWith(cardContents);
  }
}

nextCard();
