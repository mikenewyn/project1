var list = []
var currentUser = "Guinea Pig";
var database = firebase.database();
var databaseIngredients = {
    ingredients: {}
};

// app ID and api key for Edamam//
var edamam_id = "d02d745b";
var edamam_key = "a27da899f17064b2672f7c38fa09c34e";

// click on span to delete ingredient
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        list.splice(list.indexOf($(this).attr("name")), 1);
        console.log(list);
        listDisplay();
    });
    event.stopPropagation();
});

$("input").keypress(function (event) {
    if (event.which === 13) {
        var addIngredient = $(this).val();
        list.push(addIngredient);
        $(this).val("");
        listDisplay();
    };
})

function listDisplay() {
    $("ul").empty();
    for (i = 0; i < list.length; i++) {
        $("ul").append("<li name='" + list[i] + "'><span><i class='far fa-trash-alt'></i></span> " + list[i] + "</li>")
        console.log(list[i]);
    }
}

function addFood() {
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=cooking&api_key=kRsHuhDISov3OLv59PyTyJHBnpNQclEY&limit=100";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var randomNumber = Math.floor(Math.random() * 100) + 1
            var results = response.data;
            var foodDiv = $("#food");
            var foodImage = $("<img>");
            foodImage.attr("src", results[randomNumber].images.downsized.url);
            foodDiv.append(foodImage);
        });
};

$(function () {
    addFood();
});


database.ref().on("value", function (snapshot) {
    if (snapshot.val() && snapshot.val().ingredients) {
        databaseIngredients = snapshot.val();
    }
});

$("#submitButton").on("click", function () {
    event.preventDefault();
    for (i = 0; i < list.length; i++) {
        if (databaseIngredients.ingredients[list[i]]) {
            databaseIngredients.ingredients[list[i]]++;
        }
        else {
            databaseIngredients.ingredients[list[i]] = 1;
        }
    }
    console.log(databaseIngredients)
    database.ref().set(databaseIngredients);
});

// On click event for getting recipes to append to page.
$(document).on("click", "#submitButton", function () {
    databaseIngredients();
    function databaseIngredients() {
        event.preventDefault();
        $.ajax({
            url: "https://api.edamam.com/search?q=" + list + "&app_id=" + edamam_id + "&app_key=" + edamam_key,
            method: "GET"
        })
            .then(function (response) {
                // To get 1 image to append into the "Let's get cooking" div
                console.log(response);
                var results = response.hits;
                // For loop to get 10 info bits into array and append to "Let's get cooking"
                for (var i = 0; i < results.length; i++) {
                    var d = $('<span>');
                    var images = $('<img>');
                    var a = $('<a>');
                    a.append(images);
                    var p = $('<p>');
                    images.attr('src', results[i].recipe.image);
                    d.addClass('recipeArea');
                    // Gets the image to be a link
                    a.attr("href", results[i].recipe.url);
                    //Opens link in new window
                    a.attr("target", "_blank");
                    //Adds Title of the recipe.
                    p.text(results[i].recipe.label);
                    //Puts label above image
                    d.prepend(p);
                    //Adds image to the page.
                    d.append(a);
                    $("#recipeResults").append(d);
                }
            })
    }
});