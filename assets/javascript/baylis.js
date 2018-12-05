var database = firebase.database();

var ingredientList = ["cheese"];
var databaseIngredients = { ingredientList };

database.ref().on("value", function (snapshot) {
    databaseIngredients = snapshot.val();
});

$("input").keypress(function (event) {
    if (event.which === 13) {
        var ingredient = $(this).val();
        ingredientList.push(ingredient)
    }
});

$("#submitButton").on("click", function () {
    event.preventDefault();
    if (databaseIngredients[ingredientList]) {
        databaseIngredients[ingredientList]++;
    }
    else {
        databaseIngredients[ingredientList] = 1;
    }
    database.ref().set(databaseIngredients)

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
