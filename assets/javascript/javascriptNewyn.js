// app ID and api key for Edamam//
var edamam_id = "d02d745b";
var edamam_key = "a27da899f17064b2672f7c38fa09c34e";
$(document).on("click", "#submitButton", function () {
    //var recipeInfo = $(this).attr('');
    var ingredientList = "chicken";
    databaseIngredients();
    function databaseIngredients(){
        $.ajax({
        url: "https://api.edamam.com/search?q=" + ingredientList + "&app_id=" + edamam_id + "&app_key=" + edamam_key,
        method: "GET"
        })
        .then(function(response) {
        console.log(response);
        var results = response.hits;
        d.text(results[0].recipe.image);
        for(var i = 0; i < results.length; i++){
        var d = $('<div>');
        var image = $('<img>');
        d.addClass('recipe-area');
        console.log(results.uri);
        image.attr(result)
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
