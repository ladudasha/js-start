// JS с 0 Димыч   

// Урок 15 incubator

// 1
var str1 = 'number 1';

console.log(str1);
console.log('number 2');

// 2
var wordCat = 'Cat';
var translateWordCat = 'Кот';

console.log(wordCat);
console.log(translateWordCat);

// 3
var helloMessageId = 'hello-message';

helloMessageElement = document.getElementById(helloMessageId);

console.log(helloMessageElement.value);
console.log(helloMessageElement.className);

// видео 8 часть 2 разбор ДЗ

var firstNameId = 'first-name';
var lastNameId = 'last-name';
var addressId = 'address';
var citiesId = 'cities';


var firstNameEl = document.getElementById(firstNameId);
var lastNameEl = document.getElementById(lastNameId);
var addressEl = document.getElementById(addressId);
var citiesEl = document.getElementById(citiesId);
var hobbiesEl = document.getElementById('hobbies');
var avatarEl = document.getElementById('avatar');
var imgAvatarEl = document.getElementById('img-avatar');

console.log(firstNameEl.value);
console.log(firstNameEl.className);
console.log(lastNameEl.value);
console.log(addressEl.value);
console.log(citiesEl.value);
console.log(hobbiesEl);
console.log(avatarEl.innerHTML);
console.log(imgAvatarEl.alt);

firstNameEl.value = 'Dashulja';


// Урок 9

console.log(lastNameEl.className);

lastNameEl.className = 'last-name arror-input';
imgAvatarEl.src = 'https://new-img.movavi.com/pages/0012/17/f4fe12fa6f7f081f686b4a82fb27f25b82f96c78.webp'

imgAvatarEl.title = 'i am avatar';
lastNameEl.title = 'wrong last name';
citiesEl.value = 'Moscow';
hobbiesEl.value = 'i do not have hobbies';
avatarEl.innerHTML = 'изменить инер'

// урок 10 ФУНКЦИИ

function alertValues() {
    console.log('1');
    console.log('2');
    console.log('3');
}
alertValues();


// урок 12 ПАРАМЕТРЫ ФУНКЦИИ

function alertValue(elementParameter) {
    console.log(elementParameter.value);
    console.log(elementParameter.className);
}

function getEl(id) {
    var el = getElementById(id);
    return el;
}


var firstNameId = 'first-name';
var firstNameEl = getEl(firstNameId);
alertValue(firstNameEl);

var lastNameId = 'last-name';
var lastNameEl = getEl(lastNameId);
alertValue(lastNameEl);

var addressId = 'address';
var addressEl = getEl(addressId);
alertValue(addressEl);

var citiesId = 'cities';
var citiesEl = getEl(citiesId);
alertValue(citiesEl);




// урок 13 (возвращаемое значение)



function LogValue(id) {
    let el = document.getElementById(id);
    console.log(el.value);
}

function getValue(id) {
    let el = document.getElementById(id);
    return el.value;
}
var FNid = 'first-name';
var LNid = 'last-name';

LogValue(FNid);
LogValue(LNid);
LogValue(LNid);
LogValue(FNid);


var value = getValue(FNid);

window.alert(value);





// теория
// /обьект
let user = {
    name: 'Dasha',
    age: 18,
    // можно вкладывать обьект в обьект
    children: {
        sun1: "Gleb",
        sun2: "Leo"
    }
}
// добавить свойство в обьект
user.city = "Minsk"
// изменить свойство
user.name = "Masha"
// удалить свойство
delete user.city
console.log(user)


// МАССИВЫ упорядоченные данные одного типа (индекс с 0)



let fruit = ["Apple", "Pear", "Melon"]
console.log(fruit[1])

// длина массива (сколько элементов всего)
console.log(fruit.length)
// получить индекс последнего элемента 
console.log(fruit.length - 1)
//  добавить элемент в конец массива
fruit.push("Kiwi")
//  удалить последний элемент массива 
fruit.pop()
//  добавить элемент в начало массива
fruit.unshift("Kiwi")
console.log(fruit)



// ФУНКЦИИ
function showMessage() {
    console.log("hello")
}

showMessage()



// или вызывать одну и ту же функцию с разным сообщением когда ее будут вызывать
function showMessage(message) {
    console.log(message)
}

showMessage("hi")
showMessage("ho")
showMessage("ha")


// ЦИКЛЫ

let i = 0
// условие 0 < 5
while (i < 5) {
    console.log(i);
    i++
}

// или

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// для массива цикл

let fruits = ["Aple", "Orange", "Pear"]
// для каждого элемента
for (let i = 0; i <= fruits.length - 1; i++) {
    console.log(fruits[i]);
}

// условия

let number = 7;


if (number == 10) {
    console.log("you win")
}
else if (number == 7) {
    console.log("warm")
}
else if (number == 3) {
    console.log("cold")
}

else {
    console.log("you lose")
}

// можно обьединять
let login = "";
let userName = "Sveta";
let age = 18;
if ((login || userName === 'Sveta') && age == 18) {
    console.log("работает")
}

let card = true;

console.log(card ? 'the discont is 10$' : 'the discont is 2$')








// INCUBATOR 15 УРОК ДЗ

let admin = 'Джон';
let name = 'Джон';

console.log(admin)

// 5. Создайте объект house который будет иметь два свойства city и address. С любыми значениями.
let house = {
    city: 'Minsk',
    address: 'Green street',
}
// 6. Выведите в консоль по очереди сначала значение city, потом address данного объекта
console.log(house.city)
console.log(house.address)


// 7. Создайте пустой объект userNew.
// 8. Добавьте свойство name со значением John.
// 9. Добавьте свойство surname со значением Smith.
let userNew = {
    name: 'John',
    surname: 'Smith',

}
// 10. Измените значение свойства name на Pete.
userNew.name = 'Pete'
console.log(userNew)
// 11. Удалите свойство name из объекта.
delete userNew.name
console.log(userNew)


// 12. Создайте массив styles с элементами «Джаз» и «Блюз».


let styles = ["Джаз", "Блюз"]

styles.push("Рок-н-ролл")
// 14. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен
// работать для массивов с любой длиной.
styles[1] = "Классика";
// 15. Удалите первый элемент массива и покажите его.
styles.shift()
// 16. Вставьте «Рэп» и «Регги» в начало массива.
styles.unshift('Рэп', 'Регги')

console.log(styles)
// 17. Перепишите конструкцию if с использованием условного оператора '?':
// let result;
// if (a + b < 4) {
// result = 'Мало';
// } else {
// result = 'Много';
// }

let result = 4;

console.log(1 + 5 < 4 ? 'Мало' : 'Много')

// 18. Перепишите if..else с использованием нескольких операторов '?';.
// Для читаемости рекомендуется разбить код на несколько строк.
// let message;
// if (login == 'Сотрудник';) {
// message ='Привет';
// } else if (login == 'Директор') {
// message = 'Здравствуйте';
// } else if (login == '') {
// message = 'Нет логина';
// } else {
// message = '';
// }


login = 'Сотрудник';

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';

console.log(message);
