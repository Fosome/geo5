$(document).ready(function() {

  if(geoPosition.init()) {
    $("#geo-find").click(findGeo);
  } 
  else {
    $("#geo-content").hide();
    $("#geo-warning").show();
  }
});

function findGeo() {
  $("#geo-spinner").show();

  geoPosition.getCurrentPosition(
    geoSuccess,
    geoError,
    {
      enableHighAccuracy: true
    }
  );
}

function geoSuccess(position) {
  console.log("Position: " + position.coords.latitude + "," + position.coords.longitude);

  $("#geo-latitude").html(position.coords.latitude);
  $("#geo-longitude").html(position.coords.longitude);

  $("#geo-spinner").hide();
}

function geoError(error) {
  console.log(error.message);

  $("#geo-spinner").hide();
}
