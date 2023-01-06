const ageInput = document.querySelector(".age");
const genderInput = document.querySelector(".gender");
const heightInput = document.getElementById(".height").value;
const weightInput = document.getElementById(".weight").value;
const clearButton = document.querySelector(".clear");
const calculate = document.getElementById("calculate-BMI");


ageInput.addEventListener("input", ageInput1);
calculate.addEventListener("click",calculateBMI)
clearButton.addEventListener("click", reset)

let ageValue = 0;
let heightValue = 0;
let weightValue = 0;

clearButton.addEventListener("click", reset);

function ageInput1() {
    ageValue = parseInt(ageInput.value);


}

function heightInput1() {
    let height = parseInt(heightInput.value);
    heightValue = height / 100


}

function weightInput1() {

    weightValue = parseFloat(weightInput.value);


}

function calculateBMI() {
    // var height = document.getElementById("height");
    // var weight = document.getElementById("weight");
    let BMI = weightValue / heightValue * heightValue
    if (!isNaN(BMI)) {
        document.getElementById("bmi-output").innerHTML = BMI;
        if (BMI < 16) {
            document.getElementById("bmi-category").innerHTML = "Severe Thinness";
        }
        else if (BMI >= 16 && BMI < 17) {
            document.getElementById("bmi-category").innerHTML = "Moderate Thinness";
        }
        else if (BMI >= 17 && BMI < 18.5) {
            document.getElementById("bmi-category").innerHTML = "Mild Thinness";
        }
        else if (BMI >= 18.5 && BMI < 25) {
            document.getElementById("bmi-category").innerHTML = "Normal";
        }
        else if (BMI >= 25 && BMI < 30) {
            document.getElementById("bmi-category").innerHTML = "Overweight";
        } else if (BMI >= 30 && BMI < 35) {
            document.getElementById("bmi-category").innerHTML = "Obese Class I";
        } else if (BMI >= 35 && BMI < 40) {
            document.getElementById("bmi-category").innerHTML = "Obese Class II";
        }
        else if (BMI >= 40) {
            document.getElementById("bmi-category").innerHTML = "Obese Class III";
        }
    }


}

function reset() {
    ageValue = 0;
    ageInput1()
    heightValue = 0;
    heightInput1();
    weightValue = 0;
    weightInput1();
}