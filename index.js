function myMap() {
var mapProp= {
 center:new google.maps.LatLng(51.388991, 30.098648),
 zoom:5,
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function myFunction() {
  var copyText = document.getElementById("myDogeID");
  copyText.select();
  copyText.setSelectionRange(0, 32)
  document.execCommand("copy");
}
