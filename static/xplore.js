var map;

function showModal() {
    $('#video-modal').show()
}

function closeModal() {
    $('#video-modal .modal-body').empty();
    $('#video-modal').hide();
}

$(function() {
    //init();
   $('.closebtn').on('click', function() {
        closeModal();
    }); 
})
    

function clickArea(event) {

    var $div = $(event.target);
    
    var offset = $div.offset();
    var x = event.clientX - offset.left;
    var y = event.clientY - offset.top;
    var height = $(document).height();
    var width = $(document).width();
 
    var lat = 180 * (height/ 2 - y) / height;
    var lon = 360 * (x - width/2) / width;

    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(lat, lon);
    geocoder.geocode( { 'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var country = results[1].formatted_address;
        alert(country)
      } else {
        if (status == google.maps.GeocoderStatus.ZERO_RESULTS) country = "water";
        else alert("Geocode was not successful for the following reason: " + status);
      }
    });

    showModal();
};

var title = null;
var animate ;
function init(){
   title = document.getElementById('welcome');
   title.style.position= 'relative'; 
   title.style.left = '0px'; 
   moveRight();
};
function moveRight(){
    var width = jQuery(document).width();
   title.style.left = parseInt(title.style.left) + 4 + 'px';
   animate = setTimeout(moveRight,20); // call moveRight in 20msec
   console.log(title.style.left);
   if (parseInt(title.style.left) > width){
        alert("out");
        title.style.left = '0px';
    }
};
