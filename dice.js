$(function() {
  $("#rollDice").click(function() {
    let tempRoll = (Math.floor(Math.random() * 6) + 1);

    $("#diceResult").html("<p>Roll: " + tempRoll + "</p><br>")


  });


});