/*
var clicks = [],
$('.clickable').bind('click', function (ev) {
  var $div = $(ev.target);

  var offset = $div.offset();
  var x = ev.clientX - offset.left;
  var y = ev.clientY - offset.top;

  var lat = 180 * y / screen.height;
  var lon = 360 * x / screen.width;

//  pixel = new VEPixel(x, y);
//  LL = map.PixelToLatLong(pixel);

//  map.FindLocations(LL, GetResults);

});

*/

function myevent(ev) {
  alert('event!')
}

$("#map_image").click(function(e) {
  e.stopPropagation();
  alert("Handler for .click() called.");
});

/*
function GetMap() {
 // var map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), {credentials:"AlMwkFkfyU34QvJY6PRMyNDCA0N0t3UXTJfGsqZ92l-ygn3XHal3e61XObbeOcSE"});
}
*/

/*
function GetResults(locations) {

  //if(locations != null)
  {
  //  var country = locations[0].Name;
      // Get the country name

      // open the hyperlink for the country
  //  }
  //  else
  //    {
  //      var error = "No Result found.";
  //    }

  //    alert(countryw);
}
*/
