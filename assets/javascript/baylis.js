var database = firebase.database();

// var config = {
//     apiKey: "AIzaSyBwKeW4YmJyeHvSeCRgQrPvSayDP0yfvWs",
//     authDomain: "whats-in-my-fridge-335ea.firebaseapp.com",
//     databaseURL: "https://whats-in-my-fridge-335ea.firebaseio.com",
//     projectId: "whats-in-my-fridge-335ea",
//     storageBucket: "whats-in-my-fridge-335ea.appspot.com",
//     messagingSenderId: "82405487027"
// };
// firebase.initializeApp(config);

var ingredientList = [];

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


