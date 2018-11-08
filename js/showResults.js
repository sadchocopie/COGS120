var test = {'title': 'National Tree 7 Foot Dunhill Fir Tree (DUH-70)',
			'itemImage': './assets/imgs/cow-brick.jpg',
			'price': '$8',
			'index': 1,
			'store': 'UglyStore'};

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {

  console.log(local_data);

	var source = $("#results-template").html();
	var template = Handlebars.compile(source);

	var parentDiv = $("#templatedResult");

	var html = template(test);
	console.log(html);
	parentDiv.append(html);

  
  // Use the URLSearchParams API to make fake-database queries using a URL
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 /* var queryParams = new URLSearchParams(window.location.search);
  var projectTitle = queryParams.get('itemBox');
  
  console.log('query for', projectTitle);
  // to get this to work like in class, comment out the "STEP 1" parts
  // above between BEGIN and END.
  for (var i = 0; i < local_data.length; i++) {
    var curData = complexData[i];
    if (curData.title == projectTitle) {
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }
  }*/
});