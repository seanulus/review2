$(document).ready(function() {
  $("#selection").submit(function(event) {
    //debugger
    var name = parseInt($("#name").val());
    var quest = parseInt($("#quest").val());
    var color = parseInt($("#color").val());
    var location = parseInt($("#location").val());
    var axe = parseInt($("#axe").val());
    var total = name + quest + color + location + axe

    if (total >= 4) {
      $("#fantasy").fadeIn();
      $("#power, #black").hide();
    } else if (total >= 9) {
      $("#power").slideIn();
      $("#fantasy, #black").hide();
    } else (total > 13) {
      $("#black").fadeIn();
      $("#fantasy, #power")
    }

    event.preventDefault()
  });
});
