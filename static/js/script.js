var searchString, funny_result_ids, about_result_ids;
results_ids = []

function showResponse(response) {
  
  var results = response.items;
  for (var elem in results)
  {
    resource = results[elem];
    results_ids.push(resource.id.videoId);
  }
  console.log('showResponse')
  if (results_ids.length > 9) {
	  var output = '<iframe id="video" type="text/html" width="640" height="390"  src="http://www.youtube.com/embed/' + results_ids[0] + '?autoplay=0&origin=http://example.com" frameborder="0" />';
    $('.modal-body').append(output);
    results_ids = []
    console.log('It triggered!')
  }
}


// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
  console.log('onClientLoad');
  gapi.client.setApiKey('AIzaSyAP-3vnl3mxNhe2LPWaruEdRJI4rPl9Tx8');
  gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
  console.log('onYouTubeApiLoad');
}

function searchFunnyVideos(country) {
  var q = 'Funny ' + country
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });
  console.log('searchFunnyVideos')
  request.execute(showResponse)
}

function searchAboutVideos(country) {
  var q = 'About ' + country 
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });
  request.execute(showResponse)
}

// Search for a given string.
function search(country) {
  
  searchFunnyVideos(country);
  searchAboutVideos(country);
  
}

