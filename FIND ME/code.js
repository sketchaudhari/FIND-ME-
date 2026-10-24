var bugLocation = 0;
onEvent("startBtn", "click", function( ) {
  var num = randomNumber(1, 2);
  setProperty("startBtn", "hidden", true);
  if (num == 1) {
    setProperty("findMe", "x", getProperty("card1", "x")+ 30);
    bugLocation = 1;
  } else {
    setProperty("findMe", "x", getProperty("card2", "x")+ 30);
    bugLocation = 2;
  }
});
onEvent("card1", "click", function( ) {
  setProperty("card1", "hidden", true);
  setProperty("card2", "hidden", true);
  if (bugLocation == 1) {
    setProperty("titleLabel", "text", "You win!");
  } else {
    setProperty("titleLabel", "text", "You Lose!");
  }
});
onEvent("card2", "click", function( ) {
  setProperty("card2", "hidden", true);
  if (bugLocation == 2) {
    setProperty("titleLabel", "text", "You win!");
  } else {
    setProperty("titleLabel", "text", "You Lose!");
  }
  setProperty("card1", "hidden", true);
});

