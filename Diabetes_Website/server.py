from crypt import methods
from pydoc import render_doc
from statistics import mode
from flask import Flask, request, render_template
import joblib
import sklearn


model = joblib.load("model.h5")
scaler = joblib.load("scaler.h5")

app = Flask(__name__, template_folder="templates", static_folder="statics")


@app.route("/", methods=["GET"])
def home():
    return render_template("index.html")


@app.route("/Result", methods=["GET", "POST"])
def resultPage():
    # Getting user by primary key:

    Pregnancies = request.form["Pregnancies"]
    Glucose = request.form["Glucose"]
    BloodPressure = request.form["BloodPressure"]
    SkinThickness = request.form["SkinThickness"]
    Insulin = request.form["Insulin"]
    BMI = request.form["BMI"]
    DiabetesPedigreeFunction = request.form["DiabetesPedigreeFunction"]
    Age = request.form["Age"]

    print("Data recevied in flask")

    inputs = [
        Pregnancies,
        Glucose,
        BloodPressure,
        SkinThickness,
        Insulin,
        BMI,
        DiabetesPedigreeFunction,
        Age,
    ]

    result = model.predict(scaler.transform([inputs]))

    return str(result[0])


if __name__ == "__main__":
    print("Server is on ...")
    app.run()
