"use strict";

(function() {

/*
Немного теории
document - Основной объект DOM (Document Object Model)
В DOM мы можем представить все HTML элементы как дерево. Каждый HTML элемент
может иметь дочерние (вложенные) элементы - ноды.
<html> - элемент является корневым и на первом уровне имеет дочерние элементы 
<head> и <body>.

document.querySelector(*selector*) - функция возвращающая первую ноду по заданому селектору;
document.querySelectorAll(*selector*) - функция возвращающая все ноды по заданому селектору;

Селекторами могут быть:
- #id - идентификатор
- .classname - название класса
- div - название элемента
*/

// Используем везде константы (ключевое слово const) вместо переменных
// (ключевые слова let или var) т.к сами переменные мы изменять не будем

// Выберем элемент с id `result` и сохраним его в константу resultField
// В данном контексте это наше поле результата калькулятора
const resultField = document.querySelector('#result');
// Выберем элемент с id `clear` и сохраним его в константу clearBtn
// В данном контексте это кнопка очистки результата калькулятора
const clearBtn = document.querySelector('#clear');
// Выберем все элементы с классом `digit-button`
// В данном контексте это все наши кнопки с цифрами
const digitButtons = document.querySelectorAll('.digit-button');
// Выберем все элементы с классом `operator-button`
// В данном контексте это все наши кнопки с цифрами
const operatorButtons = document.querySelectorAll('.operator-button');

// Выведет в консоль элемент. (Раскомментируйте чтобы увидеть)
//console.log(resultField);

// Выведет в консоль значение элемента. (Раскомментируйте чтобы увидеть)
//console.log(resultField.value);

// Установит новое значение элемента и выведет его в консоль (Раскомментируйте чтобы увидеть)
// resultField.value = 5;
//console.log(resultField.value);

// Выведет в консоль список элементов. (Раскомментируйте чтобы увидеть)
//console.log(digitButtons);


/* 
Повесим событие нажатия на нашу кнопку очистки результата
Для этого используем метод элемента - addEventListener
Подробнее: https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener
Расскоментируйте, чтобы активировать код
*/


clearBtn.addEventListener('click', function(e) {
    // Установим значение в поле результата - 5
    resultField.value = 0;
});



/*
Повесим событие нажатия на наши цифровые кнопки. Поскольку список элементов
кнопок у нас представлен массивом, то сразу применить к нему метод addEventListener
нельзя. Пробежимся по массиву встроенным в JS методов forEach и уже внутри него повесим
обработчик на каждый элемент.

Расскоментируйте, чтобы активировать код
*/


digitButtons.forEach(function(digitButton) {
    // digitButton - текущий итерируемый элемент из нашего массива элементов

    // Повесим событие на каждый элемент
    digitButton.addEventListener('click', function(e) {
        // С помощью e.target получим именно тот элемент на который нажал пользователь
        let element = e.target;
        // Получим значение нажатой кнопки
        let value = element.value;
        // Выведем значение на экран
        console.log(value);
    });
});

})();


