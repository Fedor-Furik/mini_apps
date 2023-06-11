//1)Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить
// остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов массива меньше 2, то вторая переменная должна стать равна "alex".

let names = ['Dima','FEDOSKA','Maks','Misha']
if (names.length > 2) {
    let [a, b, ...cNames] = names
    console.log(a,b)
    for( let i = 0; i < cNames.length; i++) {
        console.log(cNames[i])
    }
} else {
    names[1] = 'Alex'
    let [a, b] = names
    console.log(a,b)
}

//2)Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. 
//Передать массив в функцию. Внутри функции каждый параметр должен быть 
//равен одному из элементов массива.

function log([a,b,c]) {
    console.log(a,b,c)
}
let Arrow = ['Dima','FEDOSKA','Maks']
log(Arrow);

//3)Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. 
//Если соответствующих полей в объекте нет, 
//задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.

let object = {
    fne:'you',
    Two:'we',
    fhree:'they'
}
let one = object.One
let three = object.Three
if (one == undefined & three == undefined) {
    one = 1
    three = 2
}
console.log(one, three)