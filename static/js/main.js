"use strict";
var i = 0;
var j = 0;
var flag = false;
var minus = "-";
var op = "";
let number = ["",""];
function calc(resFiel)
{
    var result = 0;
    switch(op)
    {
        case '+':
        result = Number(number[0]) + Number(number[1]);
        resFiel.value = result;
        number[0]=result;
        break;
        case '-':
        result = Number(number[0]) - Number(number[1]);
        resFiel.value = result;
        number[0]=result;
        break;
        case '*':
        result = Number(number[0]) * Number(number[1]);
        resFiel.value = result;
        number[0]=result;
        break;
        case '/':
        result = number[0] / number[1];
        resFiel.value = result;
        number[0]=result;
        break;

    }
};
(function() {
    const resultField = document.querySelector('#result');
    const clearBtn = document.querySelector('#clear');
    const digitButtons = document.querySelectorAll('.digit-button');
    const operatorButtons = document.querySelectorAll('.operator-button');


    operatorButtons.forEach(function(operatorButtons) {
    // digitButton - текущий итерируемый элемент из нашего массива элементов
    // Повесим событие на каждый элемент
    operatorButtons.addEventListener('click', function(e) {
        // С помощью e.target получим именно тот элемент на который нажал пользователь
        let element = e.target;
        // Получим значение нажатой кнопки
        let operation = element.value;
        
        if((number[0] == "") && (number[1] == "") && (operation == '-'))
        {
            flag = true;
        }
        
        else if((number[0] != "") && (number[1] == "") && ((operation == '*') || (operation == '/'))) {
            flag = false;
            op = operation;
            j = 1;
            if(j==1){console.log(number[0]);}
            i=1;
            j = 0;
        }
        /*else if((number[0] != "") && (number[1] == "") && (operation = '-') && (operation != '=')){
            op = operation;
            m = 0;
            j = 1;
            if(j==1){console.log(number[0]); i++;}
            j = 0;            
            flag = false;}*/
        
        else if((number[0] != "") && (number[1] == "") && ((op == "*") || (op == "/") )&& (operation == '-')){
            flag = true;}
        
        else {
        if((operation != '=')){
            op = operation;}
        j=1;
        if(j==1){
            console.log(number[i]);
            i++;
            if(i==2){
                i=1; 
                calc(resultField); 
                number[1]="";}}
        j = 0;
        flag = false;}
    });
});
    clearBtn.addEventListener('click', function(e) {
    // Установим значение в поле результата - 5
    resultField.value = 0;
    number[0]="";
    number[1]="";
    op = "";
    i = 0;
    j = 0;
    flag = false;
});
   digitButtons.forEach(function(digitButton) {
    // digitButton - текущий итерируемый элемент из нашего массива элементов
    // Повесим событие на каждый элемент
    digitButton.addEventListener('click', function(e) {
        // С помощью e.target получим именно тот элемент на который нажал пользователь
        let element = e.target;
        // Получим значение нажатой кнопки
        let value = element.value;
        // Выведем значение на экран
        if(j == 0){
        if(flag == true){number[i] += minus; resultField.value = number[i]; flag = false;}
        number[i] += value;
        resultField.value = number[i];}
        });

    });

})()