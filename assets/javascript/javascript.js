var newIngredient = "";

var ingredients = [];

var currentUser = "Guinea Pig";

var renameThisApiKeyVariableLater = "first api key";

var renameThisVariableForTheOtherApiKeyLaterToo = "other api key";

function ingredientLister() {
    // add ingredient to search
}

function ingredientCounter() {
    // adds ingredients to database
}

function popularIngredients() {
    // gets the most commonly searched for ingredients
}

function recipeFinder() {
    // search for recipes
    // $(document).on("click", ".food-button", function () {
    //     var foodGetter = $(this).attr("food");
    //     var dataGetter = "https://api.giphy.com/v1/gifs/search?q=" + foodGetter + "&api_key=" + key;
    //     gifGetter();
    //     function gifGetter() {
    //         $("#image-column").empty();
    //         event.preventDefault();
    //         $.ajax({
    //             url: dataGetter,
    //             method: "GET"
    //         }).then(function (response) {
    //             console.log(response);
    //             for (var i = 10; i > 0; i--) {
    //                 var a = $("<div>");
    //                 a.addClass("food-box");
    //                 var c = $("<p>")
    //                 c.text("rating: " + response.data[i].rating);
    //                 a.append(c);
    //                 a.append("<br>");
    //                 var b = $("<img>")
    //                 var still = response.data[i].images.downsized_still.url;
    //                 var moving = response.data[i].images.downsized_large.url;
    //                 b.attr("src", still);
    //                 b.attr("asleep", still);
    //                 b.attr("awake", moving);
    //                 b.attr("status", "asleep");
    //                 b.addClass("foodGif")
    //                 a.append(b);
    //                 $("#image-column").prepend(a);
    //             }
    //         });
    //     }
    // });
    
}

// function recipeLister() {
//     // put recipes into #recipe-box
// }

// function helloUser() {
//     // simulates logged in user
// }

// function recipeSaver() {
//     // for saving favorite recipes
// }

// The api is accessible at http://www.recipepuppy.com/api/. 

// For example:
// http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3 

// Optional Parameters:
// i : comma delimited ingredients
// q : normal search query
// p : page
// format=xml : if you want xml instead of json 