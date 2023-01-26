

function homePageIsLoading() {
    $("#resultText").css('visibility', 'hidden');
}

function submitButtonClicked() {


    Pregnancies = $("#Pregnancies").val();
    Glucose = $("#Glucose").val();
    BloodPressure = $("#BloodPressure").val();
    SkinThickness = $("#SkinThickness").val();
    Insulin = $("#Insulin").val();
    BMI = $("#BMI").val();
    DiabetesPedigreeFunction = $("#DiabetesPedigreeFunction").val();
    Age = $("#Age").val();

    console.log("jQuery Sending the request ...");

    theData = {
        "Pregnancies": Pregnancies, "Glucose": Glucose, "BloodPressure": BloodPressure,
        "SkinThickness": SkinThickness, "Insulin": Insulin, "BMI": BMI, "DiabetesPedigreeFunction": DiabetesPedigreeFunction,
        "Age": Age
    }



    $.post("http://127.0.0.1:5000/Result", {
        "Pregnancies": Pregnancies, "Glucose": Glucose, "BloodPressure": BloodPressure,
        "SkinThickness": SkinThickness, "Insulin": Insulin, "BMI": BMI, "DiabetesPedigreeFunction": DiabetesPedigreeFunction,
        "Age": Age
    }, function (data, status) {
        console.log(`request status: ${status}`)
        console.log(`result is ${data}`)


        $(window).scrollTop(0);
        $('#resultText').css('visibility', 'visible');
        $("#resultText").css("opacity", "0.7");

        if (data == "1") {
            $("#resultText").text("Result: Positive")


        } else {
            $("#resultText").text("Result: Negative")

        }
    })
}




window.onload = homePageIsLoading;

