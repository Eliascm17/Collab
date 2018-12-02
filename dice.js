$(function() {
  $("#numberOfSides").val("6");
  $("#rollDice").click(function() {

    let numberOfSides = $("#numberOfSides").val();
    let tempRoll = (Math.floor(Math.random() * numberOfSides) + 1);

    $("#diceResult").html("<p>Roll: " + tempRoll + "</p><br>")


  });


});
