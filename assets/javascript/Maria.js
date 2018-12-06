


// click on span to delete ingredient
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();

});

$("input").keypress(function (event) {
    if (event.which === 13) {
        var addIngredient = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + addIngredient + "</li>")
    }
});




var food = $("#buttonLol").on("click", function (event) {
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=kRsHuhDISov3OLv59PyTyJHBnpNQclEY&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var foodLol = $("#lolButton");
                $(food).append(foodLol);
            }
        });
});

