var database = firebase.database();

var ingredientList = ["cheese", "meat", "milk", "bread"];

$("#submitButton").on("click", function () {

    for (i = 0; i < ingredientList.length; i++) {
        if (database.ref(commonIngredients.indexOf(ingredientList[i]) === -1)) {
            database.ref().push({
                commonIngredients: + ingredientList[i]
            })
        }
        else {
            database.ref().push({
                commonIngredients: ingredientList[i]++
            })
        }
    }
});


// Create a new post reference with an auto-generated id
// var newPostRef = postListRef.push();
// newPostRef.set({
    // ...
// });

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
