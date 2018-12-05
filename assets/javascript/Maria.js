


// click on span to delete ingredient
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
    
});

$("input").keypress(function(event){
 if (event.which === 13){
    var addIngredient = $(this).val();
    $(this).val("");
    $("ul").append("<li><span> X </span> " + addIngredient + "</li>")
 }
});