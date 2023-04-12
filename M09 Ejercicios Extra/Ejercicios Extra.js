/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const mainArray = [];

   Object.keys(objeto).length

   for (let i = 0; i < Object.keys(objeto).length; i++) {
      mainArray.push([Object.keys(objeto)[i], objeto[Object.keys(objeto)[i]]]);
   }
   return mainArray;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const obj = {}
   
   

   const sortedString = string.split('').sort();
   
   for (let letter of sortedString) {
   if (obj.hasOwnProperty(letter)) obj [letter] += 1;
   else obj[letter] =1;
}
return obj;
}
function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var s = [];

   for (let i = string.length;  i >= 0; i--) {
      if (string.charAt(i) == string.charAt(i).toUpperCase()) {
         s.unshift(string.charAt(i));
      }
   }
   for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) != string.charAt(i).toUpperCase()) {
         s.push(string.charAt(i));
      }
   }

   return s.join('');


}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var a = frase.split (" ");
   var arr = [];
   a.forEach(element => {
      var f = element.split("");
      var b = f.reverse();
      var c = b.join("");
      arr.push(c);
   });
   var c = arr.join(" ");
   return c;
 }


   // let arrayFrase = frase.split("");
   // let arrayPalabras = arrayFrase.map (e => e.split ("").reverse().join(""))
   // let result = arrayPalabras.join ("");
   // return result;

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
 let nuevonumero = numero.toString().split("").reverse().join("");

 if (nuevonumero == numero)
 return "Es capicua"
else return "No es capicua"
}



function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let array = [];
   for (let i =0; i < string.length; i++) {
      if (string[i] !== "a" && string [i] !== "b" && string[i] !== "c") {
      array.push(string[i])
   }

   }
   let stringJunto = array.join("")
   return stringJunto;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var arr = arrayOfStrings;
   for (let i = 0; i < arr.length; i++){
      var comparador = arr[i];
      j = i-1;
      while (j>=0 && comparador.length < arr[j].length) {
         arr[j+1] = arr[j]
         j--
      }
      arr[j+1] = comparador;
   }
   return arr;

}
arrayOfStrings = ["Ho", "H", "hola", "hol"]

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var resultado = [];

   var set = new Set (array1);

   for (var i = 0; i <array2.length; i++){
      if (set.has(array2[i])) {
         resultado.push(array2[i]);
      };
   };
   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
