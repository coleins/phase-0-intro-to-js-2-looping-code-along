function writeCards(names, giftType) {
  return names.map(
    (name) => `Thank you, ${name}, for the wonderful ${giftType} gift!`
  );
}
function countDown(startingNumber) {
  for (let i = startingNumber; i >= 0; i--) {
    console.log(i);
  }
}
