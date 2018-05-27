// объекты 
var start = document.querySelector(".task-start");
var popup = document.querySelector(".task-repeat");
var taskSum = document.querySelector(".task-sum");
var firstDenominator = document.querySelector(".first-denominator");
var secondDenominator = document.querySelector(".second-denominator");
var firstDenominatorInput = document.querySelector(".first-denominator-input");
var secondDenominatorInput = document.querySelector(".second-denominator-input");

// валидный диапазон чисел
const A_MIN = 6; 
const A_MAX = 9;
const RANGE_A = A_MAX - A_MIN + 1; 

const SUM_AB_MIN = 11; 
const SUM_AB_MAX = 14;
const RANGE_SUM_AB = SUM_AB_MAX - SUM_AB_MIN + 1;

// вспомогательные переменные и константы
var a;
var b;
var total;

let getRandomInteger = max => Math.floor(Math.random() * (max));


function getInitialValues (){
	a = A_MIN + getRandomInteger(RANGE_A);
    sumAB = SUM_AB_MIN + getRandomInteger(RANGE_SUM_AB);
    b = sumAB - a;
    firstDenominator.textContent = a;
    secondDenominator.textContent = b;
    taskSum.value = "?";
    // console.log (a);
    // console.log (b);
}


start.addEventListener("click", function (evt) {
    evt.preventDefault();
    firstDenominatorInput.classList.remove("hidden");
    start.classList.add("hidden");
    getInitialValues();
    firstDenominatorInput.focus();
  });

firstDenominatorInput.addEventListener("keydown",function (evt) {
    if (evt.key == "Enter") {
    	if (firstDenominatorInput.value == a) {
    		firstDenominatorInput.classList.add("js-input-right");
    		firstDenominatorInput.style.color = "#272727";
    		firstDenominatorInput.style.border = "none";
    		firstDenominatorInput.setAttribute('readonly', true);
    		firstDenominator.style.backgroundColor = "";
    		secondDenominatorInput.classList.remove("hidden");
    		secondDenominatorInput.focus();
    	} else {
    		firstDenominatorInput.classList.add("js-input-wrong");
    		firstDenominator.style.backgroundColor = "#fca749";
    		firstDenominator.style.borderRadius = "4px";
    	}
	};
});

secondDenominatorInput.addEventListener("keydown",function (evt) {
    if (evt.key == "Enter") {
    	if (secondDenominatorInput.value == b) {
    		secondDenominatorInput.classList.add("js-input-right");
    		secondDenominatorInput.style.color = "#272727";
    		secondDenominatorInput.style.border = "none";
    		secondDenominatorInput.setAttribute('readonly', true);
    		secondDenominator.style.backgroundColor = "";
    		taskSum.removeAttribute('readonly');
    		taskSum.classList.remove("readonly");
    		taskSum.value = "";
    		taskSum.style.outline = "none";
    		taskSum.focus();
    	} else {
    		secondDenominatorInput.classList.add("js-input-wrong");
    		secondDenominator.style.backgroundColor = "#fca749";
    		secondDenominator.style.borderRadius = "4px";
    	}
	};
});

taskSum.addEventListener("keydown",function (evt) {
    // console.log (taskSum.value);
    if (evt.key == "Enter") {
    	if (taskSum.value == sumAB) {
    		taskSum.style.border = "none";
    		taskSum.setAttribute('readonly', true);
    		taskSum.style.color = "#272727";
    		popup.classList.remove("hidden");
    		popup.classList.add("js-visible-button");
    		// popup.focus();
    	} else {
    		taskSum.classList.add("js-input-wrong");
    	}
	};
});

popup.addEventListener("click", function (evt) {
    // evt.preventDefault();
    // popup.classList.add("hidden");
    // getInitialValues();
    // firstDenominatorInput.focus();
    location.reload(); // window.location.reload()
  });





