// Getting select option
document.getElementById('sortingMenuId').addEventListener('change', function (e) {

    var results = document.getElementsByClassName('resultsText');
    var boxArray = [];
    var priceArray = [];

    var price;
    var parentBox;
    var review;
    var set;

    // Populate array with grid contents
    for(var i =0; i < results.length; i++) {
    
       // Get price tag to analyze
       if(results[i].id === "itemPrice") {
            price = parseFloat(results[i].innerHTML.replace(/\$|,/g, ''));
            parentBox = results[i].parentElement.parentElement;
       } 

       // get rating
       if(results[i].id === "ratingScore") {
            review = results[i].innerHTML;
            set = true;
       }

       // only add when price and ratings are set
       if(set === true) {

            boxArray.push({parent:parentBox, price:price, rating:review});
            set = false;
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

    } else if(e.target.value === "Rating-lowToHigh") {
        boxArray.sort(function (b1, b2) {

            // Sort by price
            // If the first item has a higher number, move it down
            // If the first item has a lower number, move it up
            if (b1.rating <= b2.rating) return -1;
            if (b1.rating > b2.rating) return 1;

        });
    } else if(e.target.value === "Rating-highToLow") {
        boxArray.sort(function (b1, b2) {

            // Sort by price
            // If the first item has a higher number, move it up
            // If the first item has a lower number, move it down
            if (b1.rating >= b2.rating) return -1;
            if (b1.rating < b2.rating) return 1;

        });
    }
    document.getElementsByClassName("grid")[0].innerHTML = '';

    for(var i = 0; i < boxArray.length; i++) {
        document.getElementsByClassName("grid")[0].appendChild(boxArray[i].parent);
    }

});