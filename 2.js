// Cоздать функцию, которая принимает имя и выводит приветствие, используя переданное имя, в консоль. 
// Также необходимо спросить у пользователя его имя и вызвать функцию, про которую ранее шла речь, передав 
// ей полученное от пользователя имя.

const name = prompt("Введите имя");
sayName(name);

function sayName(name) {
    alert(`Привет, ${name}!`);
}
