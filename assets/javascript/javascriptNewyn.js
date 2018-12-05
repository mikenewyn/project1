var recipesOut = []

// app ID and api key for Edamam//
var edamam_id = "d02d745b";
var edamam_key = "a27da899f17064b2672f7c38fa09c34e";
$(document).on("click", "#submitButton", function () {
    //var recipeInfo = $(this).attr('');
    var ingredientList = "chicken";
    databaseIngredients();
    function databaseIngredients(){
        event.preventDefault();
        $.ajax({
        url: "https://api.edamam.com/search?q=" + ingredientList + "&app_id=" + edamam_id + "&app_key=" + edamam_key,
        method: "GET"
        })
        .then(function(response) {
// To get image to append into the "Let's get cooking" div
        // console.log(response);
        var results = response.hits;
        // console.log(results[0].recipe.image);
        // var d = $('<div>');
        // var images = $('<img>');
        // images.attr("src", results[0].recipe.image);
        // d.append(images);
        // $("#recipeResuconsole.log(this); lts").append(d);
// For loop to get 10 images into array and append to "Let's get cooking"
        for(var i = 0; i < results.length; i++){
            var d = $('<span>');
            var images = $('<img>');
            d.addClass('recipeArea');
            images.attr('src', results[i].recipe.image);
            d.append(images);
            $("#recipeResults").append(d);
            
        }
    })
}
    });
  //$.ajax({
  //  url: ,
    //method: "GET"
  //})
  //.then(function(response) {
   // console.log(response);
   // for(var i = 0; i < results.length; i++){
    //var d = $('<div>');
    //var image = $('<img>');
    //d.addClass('recipe-area');
    //image.attr()
    //console.log(response.hits[i]);
    //}
  //});
