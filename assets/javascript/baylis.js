var database = firebase.database();

var ingredientList = [];
var databaseIngredients = {
    ingredients: {}
};

database.ref().on("value", function (snapshot) {
    if (snapshot.val() && snapshot.val().ingredients) {
        databaseIngredients = snapshot.val();
    }
});

$("#submitButton").on("click", function () {
    event.preventDefault();
    for (i = 0; i < ingredientList.length; i++) {
        if (databaseIngredients.ingredients[ingredientList[i]]) {
            databaseIngredients.ingredients[ingredientList[i]]++;
        }
        else {
            databaseIngredients.ingredients[ingredientList[i]] = 1;
        }
        // }
    }
    console.log(databaseIngredients)
    database.ref().set(databaseIngredients);

});
