/* Ex 1 */
console.log("Hello world");

/* Ex 2 */
let color;
color = "red";
console.log(color);

/* Ex 3 */
const msg = "C'est une constante";
console.log(msg);

/* Ex 4 */
let string = "String";
console.log(string);

/* Ex 5 */
let x = 66;
let y = 12;
let result = x + y;
console.log(result);

/* Ex 6*/
let userFirstName = window.prompt("Comment t'appelles-tu ?");
console.log(`Salut ${userFirstName}`);

/* Ex 7*/
let userName = window.prompt("Quel est ton nom ?");
let userAge = window.prompt("En quelle année es-tu né ?");
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let currentDate = `${year}-${month}-${day}`;
let resultAge = currentDate - userAge;
console.log(`Salut ${userFirstName} ${userName}, cette année tu ${resultAge} ans !`);


