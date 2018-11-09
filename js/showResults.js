var test = {'Description': 'National Tree 7 Foot Dunhill Fir Tree (DUH-70)',
			'Link': './assets/imgs/cow-brick.jpg',
			'Price': '$8',
			'Index': 1,
			'Store': 'UglyStore'};

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {

  console.log(local_data);

	var source = $("#results-template").html();
	var template = Handlebars.compile(source);

	var parentDiv = $(".grid");

  for (var i = 0; i < local_data.length; i++) {
      var curData = local_data[i];

      if(local_data[i].Description === "Null") {
        console.log("OUT");
        continue;
      }
      var curHtml = template(curData);
      parentDiv.append(curHtml);
  }
  
  
  var queryParams = new URLSearchParams(window.location.search);
  var projectTitle = queryParams.get('itemBox');
  
  console.log('query for', projectTitle);
  // to get this to work like in class, comment out the "STEP 1" parts
  // above between BEGIN and END.
  for (var i = 0; i < local_data.length; i++) {
    var curData = local_data[i];

    // skip the items with null values
    if(local_data[i].Description === "Null") {
        continue;
    }

    if (curData.title == projectTitle) {
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }
  }
});