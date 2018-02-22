$(document).ready(function() {
  $("#selection").submit(function(event) {
    //debugger
    var name = parseInt($("#name").val());
    var quest = parseInt($("#quest").val());
    var color = parseInt($("#color").val());
    var location = parseInt($("#location").val());
    var axe = parseInt($("#axe").val());
    var total = name + quest + color + location + axe

    if (total <= 7) {
      $("#fantasy").fadeIn();
      $("#power, #black").hide();
    } else if (total <= 13) {
       $("#power").fadeIn();
       $("#fantasy, #black").hide();
     } else {
       $("#black").fadeIn();
       $("#fantasy, #power").hide();
     }

    event.preventDefault()
  });
});
