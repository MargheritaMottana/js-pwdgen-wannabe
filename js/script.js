/*

Step:
1. Chiedere nome all'utente
2. Chiedere cognome all'utente
3. Chiedere colore preferito all'utente
4. Generare la password
5. Scrivere in pagina la password

*/

// Step 1
const name = prompt('Qual è il tuo nome?');
console.log('Name:', name)

// Step 2
const surname = prompt('Qual è il tuo cognome?');
console.log('Surname:', surname)

// Step 3
const color = prompt('Qual è il tuo colore preferito?');
console.log('Color:', color)

// Step 4
let password = name + surname + color + 130;
console.log('pw:', password)

// Step 5
document.getElementById('password-text').innerHTML = password