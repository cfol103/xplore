var clicks = [],
$('.clickable').bind('click', function (ev) {
    var $div = $(ev.target);
    
    var offset = $div.offset();
    var x = ev.clientX - offset.left;
    var y = ev.clientY - offset.top;

     var lat = 180 * y / screen.height;
	 var lon = 360 * x / screen.width;

	 pixel = new VEPixel(x, y);
            LL = map.PixelToLatLong(pixel);

            map.FindLocations(LL, GetResults);

});

function GetMap() {
   	var map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), {credentials:"Your Bing Maps Key"});
}


 function GetResults(locations) {
           var s="Results for " + LL.Latitude + ", " + LL.Longitude + ": ";
            if(locations != null)
            {
              s+=locations[0].Name;
              // Get the country name

// open the hyperlink for the country
            }
            else
            {
               s+="No Result found.";
            }

            alert(s);
}