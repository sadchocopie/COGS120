// Getting select option
document.getElementById('sortingMenuId').addEventListener('change', function (e) {

    var results = document.getElementsByClassName('resultsText');
    var boxArray = [];
    var priceArray = [];

    // Populate array with grid contents
    for(var i =0; i < results.length; i++) {
       
       // Get price tag to analyze
       if(results[i].id === "itemPrice") {
            var price = parseFloat(results[i].innerHTML.replace(/\$|,/g, ''));
            var parentBox = results[i].parentElement.parentElement;

            boxArray.push({price:price, parent:parentBox});
       }

    }

    if(e.target.value === "Price-lowToHigh") {

        boxArray.sort(function (b1, b2) {

            // Sort by price
            // If the first item has a higher number, move it up
            // If the first item has a lower number, move it down
            if (b1.price <= b2.price) return -1;
            if (b1.price > b2.price) return 1;

        });

    } else if (e.target.value === "Price-highToLow") {
        boxArray.sort(function (b1, b2) {

            // Sort by price
            // If the first item has a higher number, move it up
            // If the first item has a lower number, move it down
            if (b1.price >= b2.price) return -1;
            if (b1.price < b2.price) return 1;

        });

    } else if(e.target.value === "Rating") {

    }
    document.getElementsByClassName("grid")[0].innerHTML = '';

    for(var i = 0; i < boxArray.length; i++) {
        document.getElementsByClassName("grid")[0].appendChild(boxArray[i].parent);
    }

});