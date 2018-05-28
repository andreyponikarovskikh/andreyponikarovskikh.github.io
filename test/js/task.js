//случайное целое число из диапазона
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var a = getRandomInteger(6,9);
var result = getRandomInteger(11,14);
var b = result - a;

slotA.innerHTML = a;
slotB.innerHTML = b;

//параметры зависящие от размеров sprite.png (левый отступ, длина и высота дуги в 2 деления линейки)
var arrowOneIndent = 39;
var arrowMinLength = 75;
var arrowMinHeight = 35;

//расчет размеров стрелок
function getArrowLength(AorB, isSecond) {
  return (AorB-2)*arrowOneIndent+arrowMinLength + (isSecond ? 1 : 0);//+1px при переходе через жирную вертикальную линию линейки
}

function getArrowHeight(el) {
  return getArrowTopPoint(el === inputOne ? a : b)*0.75;//коэф. 0.75 дает реальную высоту дуги относительно верхней точки кривой Безье
}

function getArrowTopPoint(AorB) {
  return (AorB-2)*12+arrowMinHeight;//верхняя точка кривой Безье
}

//составление svg path для нужной длины стрелки
function drawArrow(AorB, isSecond) {
  var arrowLength = getArrowLength(AorB, isSecond);
  var arrowTopPoint = getArrowTopPoint(AorB);
  var startPoint = "M0,0 ";
  var curverOne = "C" + arrowTopPoint/2 + "," + -arrowTopPoint + " ";
  var curverTwo = arrowLength-arrowTopPoint/2 + "," + -arrowTopPoint + " ";
  var endPoint = arrowLength + ",0 ";
  var arrowHead = "l 0,-8 -6,4 6,3";
  return "<path d='"+startPoint+curverOne+curverTwo+endPoint+arrowHead+"' style='"+dashing(AorB)+"'></path>";
}

//свойства для равномерной анимации отрисовки стрелок разной длины
function dashing(AorB) {
  var dash = (AorB+1)*50;
  return "stroke-dasharray: "+dash+";stroke-dashoffset: "+dash+";"
}

//установка инпута для слагаемых над центром дуги
function setInputPosition(el) {
  el.style.left = (el !== inputOne ? arrowTwoIndent+(getArrowLength(b, true)/2) : getArrowLength(a)/2+
  arrowOneIndent)-el.offsetWidth/2+"px";
  el.style.top = -getArrowHeight(el)-12+"px"; //12px зависят от высоты инпута
}

arrowOne.innerHTML = drawArrow(a);
setInputPosition(inputOne);
inputOne.focus();

//отступ от левого края линейки для второй стрелки
var arrowTwoIndent = arrowOneIndent + getArrowLength(a);
arrowTwoField.style.left = arrowTwoIndent+"px";

//обработка нажатий клавиш
window.addEventListener('keypress', function(e){
  if (event.key !== " " && !isNaN(+event.key)){
    if (typeof inputTwo !== 'undefined' && typeof slotResult === 'undefined') {
      inputTwo.value = event.key;
      handleInputValue(inputTwo, b);
    } else if (typeof inputTwo !== 'undefined' && typeof slotResult !== 'undefined') {
      slotResult.value += event.key;
      handleInputValue(slotResult, result);
    } else {
      inputOne.value = event.key;
      handleInputValue(inputOne, a);
    }
  }
  if (event.key === " " && answerIsCorrect) {
    location.reload();
  }
  e.preventDefault();
});

//действия при копировании в инпуты
window.addEventListener('input', function(){
  if (event.target.id === 'inputOne') {
    handleInputValue(inputOne, a); 
  }
  if (event.target.id === 'inputTwo') {
    handleInputValue(inputTwo, b);
  }
  if (event.target.id === 'slotResult') {
    handleInputValue(slotResult, result);
  }
})

var answerIsCorrect = false; //используется как условие для перезагрузки страницы

//обработка введенных значений
function handleInputValue(input, targetValue) {
  if (input.value == targetValue) {
    if (input === inputOne) {
      slotA.classList.remove('incorrect');
      arrowTwo.innerHTML = drawArrow(b,true);
      addInput('inputTwo');
    } else if (input === inputTwo) {
      slotB.classList.remove('incorrect');
      addInput('slotResult');
      slotResult.focus();
    } else {
      answerIsCorrect = true;
      congratulate();
    }
    inputToNumber(input);
  } else {
    if (input.value.length >= targetValue.toString().length) {
      input.style.color = 'red';
    }
    if (input === inputOne) {
      slotA.classList.add('incorrect');
    } 
    if (typeof inputTwo !== 'undefined' && input === inputTwo) {
      slotB.classList.add('incorrect');
    }
    if (targetValue === result && input.value.length > 2) {
      input.value = input.value.charAt(2);
      input.style.color = '';
    }
  }
}

//конвертация инпут в текст
function inputToNumber(input) {
  var id = input.id;
  var value = input.value;
  var span = document.createElement("span");
  span.id = id;
  span.innerHTML = value;
  if (typeof slotResult !== 'undefined' && input === slotResult) {
    input.remove();
    numbers.appendChild(span);
  } else {
    input.remove();
    axis.appendChild(span);
    setInputPosition(span);
  }
}

//добавление нового инпута
function addInput(id) {
  var newInput = document.createElement("input");
  newInput.type = 'text';
  newInput.id = id;
  if (id === 'inputTwo') {
    axis.appendChild(newInput);
    setInputPosition(inputTwo, true);
    inputTwo.focus();
  } else {
    question.remove();
    numbers.appendChild(newInput);
  }
}

//вывод сообщения после решения примера

var popup = document.querySelector(".task-repeat");
function congratulate() {
  popup.classList.remove("hidden");
  popup.classList.add("button-visible");
}

popup.addEventListener("click", function (evt) {
    location.reload(); // window.location.reload()
  });