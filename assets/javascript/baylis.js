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

$("input").keypress(function (event) {
    if (event.which === 13) {
        var addIngredient = $(this).val().trim();
        ingredientList.push(addIngredient);
        console.log(ingredientList);
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

    //     for (i = 0; i < ingredientList.length; i++) {
    //         if (database.ref(commonIngredients.indexOf(ingredientList[i]) === -1)) {
    //             database.ref().push({
    //                 commonIngredients: + ingredientList[i]
    //             })
    //         }
    //         else {
    //             database.ref().push({
    //                 commonIngredients: ingredientList[i]++
    //             })
    //         }
    //     }
});


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
