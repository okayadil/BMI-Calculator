function calculateBmi(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");
    
    if (!height || isNaN(height) || height < 0){
        result.innerText = "Enter Valid Height";
        return;
    } else if (!weight || isNaN(weight) || weight < 0){
        result.innerText = " Enter Valid Weight";
        result;
    }

    const bmi = (weight / ((height / 100) * (height / 100) )).toFixed(2);
    
    if (bmi < 18.5){
        result.innerText = `Under Weight: ${bmi}`;
    }else if(bmi >= 18.5 && bmi <= 24.9){
        result.innerText = `Normal: ${bmi}`;
    }else if (bmi >= 25 && bmi <= 29.9){
        result.innerText = `Overweight: ${bmi}`;
    }else if (bmi >= 30 && bmi <= 34.9){
        result.innerText = `Obese: ${bmi}`;
    }else {
        result.innerText = `Extremely Obese: ${bmi}`;
    }

}

const button = document.getElementById("btn");
button.addEventListener('click', calculateBmi);