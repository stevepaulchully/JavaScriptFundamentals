function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let array = [1, 2, 3];

for (let i = 0; i < 3; i++) {
  shuffle(array);
  console.log(`Shuffle ${i + 1}:`, array);
}
