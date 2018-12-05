// <<<<<<< HEAD
var newIngredient = "cheese";


var currentUser = "Guinea Pig";

var renameThisVariableForTheOtherApiKeyLaterToo = "other api key";



//$.ajax({
 //   url: "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3",
 //   method: "GET"
 // }).then(function(response) {
 //   console.log(response);
 // });

function ingredientLister() {
    // add ingredient to search
}

// var database = firebase.database();
// var clickCounter = 0;

// $("#click-button").on("click", function() {
//   clickCounter++;
//   database.ref().set({
//     clickCount: clickCounter
//   });
// });

// // MAIN PROCESS + INITIAL CODE
// // --------------------------------------------------------------------------------

// database.ref().on("value", function(snapshot) {
//   console.log(snapshot.val());
//   $("#click-value").text(snapshot.val().clickCount);
//   clickCounter = snapshot.val().clickCount;
// }, function(errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });


// }

function ingredientCounter() {
    // adds ingredients to database
}

// function popularIngredients() {
//     // gets the most commonly searched for ingredients
//     var mostCommonIngredients = database.ref("commonIngredients").orderByChild("searched").limitToFirst(10);
//     for (i = 0; i < 10; i ++) {
//         var a = mostCommonIngredients[i];
//         var b = ("<li>")
//         b.append(a)
//         $("#commonIngredientBox").append(b)
//     }
// }

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
//on click event for recipepuppy below//
//http://www.recipepuppy.com/api/. 
//http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3 


// function recipeLister() {
//     // put recipes into #recipe-box
// }

// function helloUser() {
//     // simulates logged in user
// }

// function recipeSaver() {
//     // for saving favorite recipes
// }



// Optional Parameters:
// i : comma delimited ingredients
// q : normal search query
// p : page
// format=xml : if you want xml instead of json 
// =======
// API Key for Edamam below://
// Name: API signup	Key: d02d745b

//     < form action = "http://www.recipepuppy.com/" method = "get" style = "font-size:10px;" > 
//     <b style="font-size:14px;">Recipe Search by Ingredients:</b> 
//     <input type="text" name="i" id="i" value="Enter ingredients separated by commas" size=31 style = "color:gray;font-size:11px;" onfocus = "if(this.style.color=='gray'){this.style.color='black';this.value='';}" onblur = "if(this.value==''){this.style.color='gray';this.value='Enter ingredients separated by commas';}" /> 
//     <input type="submit" value="Search" style="font-size:11px;" /> <br />Powered by < a href = "http://www.recipepuppy.com" style = "font-size:10px;" > Recipe Puppy</a ></form >
// >>>>>>> origin/mike.newyn




