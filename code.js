//162 cards, 2 sides each = 324 card faces.
//We want to select a single face: index is 0 to 323
function pickRandomCard() {
  return Math.floor(Math.random() * 162 * 2);
}

//words are in words.js file as "words" array
//every 12 words is one card (front and back)
//first 6 from the brown side of the card, the next 6 from the green side


function nextCard() {
  let rnd = pickRandomCard();
  
  var cardWords = words.slice(rnd*6,rnd*6 + 6);

  const list = document.getElementById("wordCard");
  list.innerHTML = '';
  
  //2023-03-17 not an error, cards are zero indexed: so card[0]=#1, card[1]=#2, card[2]=#3
  
  var cardStyle = rnd % 2 == 0 ? "odd" : "even";
  list.className = "word-list " + cardStyle;
  cardWords.forEach(word => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "word-text";
    span.textContent = word;
    li.appendChild(span);
    list.appendChild(li);
  });
}
  
nextCard();
