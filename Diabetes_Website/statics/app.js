

function homePageIsLoading() {
    $("#resultText").css('visibility', 'hidden');
}

function submitButtonClicked() {
    //document.getElementById('test').innerHTML = document.getElementById('Pregnancies').value;;
    // $("#test").text($("#Pregnancies").val());
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

    // $.ajax({
    //     type: 'POST',
    //     contentType: 'application/json',
    //     url: '/Result',
    //     dataType: 'json',
    //     data: JSON.stringify(theData),
    //     success: (theData) => {
    //         console.log('Flask response: ' + theData)
    //     },
    //     error: (theData) => {
    //         console.log(theData)
    //     }
    // });



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
            // $("#resultText").css("color", "#EE204D")

        } else {
            $("#resultText").text("Result: Negative")
            // $("#resultText").css("color", "#318CE7")

        }
    })
}




window.onload = homePageIsLoading;

