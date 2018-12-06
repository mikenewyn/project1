
var list = []

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
