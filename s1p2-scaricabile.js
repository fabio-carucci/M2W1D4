/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
1. Number: sono valori numerici compresi tra (-2^53 - 1) e (+2^53 - 1); si possono inserire valori sia interi,
    sia decimali (separati dalla virgola).
2. String: è una sequenza di caratteri racchiusi all'interno di apici, doppie virgolette o apici obliqui (backticks); 
    ex. "Fabio".
3. Boolean: sono due valori specifici --> true o false.
4. Undefined: si ottiene quando ad una variabile dichiarata non si assegna alcun valore.
5. Null: si ottiene quando ad una variabile dichiarata viene assegnato un valore nullo (null != 0)
 */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* 
In javascript, un oggetto è un'insieme di informazioni a cui viene associato un valore che può essere
    data type (number, string, boolean, undefined o null) o anche structural type (oggetto, array o funzione);
    per questo motivo si dice che un oggetto ha un formato chiave-valore.
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* console.log(12 + 20); // output: 32 */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12; */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let name = "Fabio" */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* console.log(4 - x); //output: -8 */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* 
let name1="john";
let name2="John";
console.log(name1===name2); // output: false
console.log(name1.toLowerCase()===name2.toLowerCase()); //output: true
*/
