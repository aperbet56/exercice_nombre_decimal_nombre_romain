/** Ennoncé
 *
 * Créez une fonction appelé parseToRoman qui, pour un nombre donné, va retourner sa valeur en chiffres romains.
 *
 */

/* Ma solution */

// Déclaration de la fonction parseToRoman qui va permettre de transformer un nombre décimal en nombre romain
const parseToRoman = (number) => {
  // Ajout du tableau de nombre décimaux (par ordre décroissant) dans la constante decimal
  const decimal = [1000, 500, 100, 50, 10, 5, 1];
  // Ajout du tableau de nombre romains (par ordre décroissant) dans la constante roman
  const roman = ["M", "D", "C", "L", "X", "V", "I"];

  // Création de la variable result qui va stocker le resultat
  let result = "";

  // Boucle for qui va parcourir le tableau décimal
  for (let i = 0; i < decimal.length; i++) {
    // Condition tant que (tant que la condtion est vraie )
    while (number % decimal[i] < number) {
      // Ajout du nombre romain dans la variable result
      result += roman[i];
      // soustraire au nombre sur lequel je travaille la valeur décimale qui est présente dans la boucle a l'instant T
      number -= decimal[i];
    }
  }
  return result;
};
// Appel de la fonction parseToRoman
parseToRoman(1008); // MVIII

/* Tests */

// parseToRoman(4) // === IIII
// parseToRoman(37) // === XXXVII
// parseToRoman(143) // === CXXXXIII
// parseToRoman(1234) // === MCCXXXIIII
