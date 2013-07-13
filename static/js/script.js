var searchString;

function showResponse(response) {
 // document.getElementById('response').innerHTML += response;
 // response_string = JSON.stringify(response, null, '\t'); 
  
  var results = response.items;
  for (var elem in results)
  {
    resource = results[elem];
    console.log(resource.snippet.title);
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
    search()
}

// Search for a given string.
function search() {
  var q = 'Australia Funny' 
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(showResponse);
}
