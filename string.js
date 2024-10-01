// - - - Variáveis utilizadas - - -
let input = 'Coca Cola';
let contador = 0;

// - - - Filtro de acentuação das letras - - -
input = input.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

// - - - Verificaçõa dos caracteres do input, convertendo para minúscula e somando no contador - - -
for (let i = 0; i < input.length; i++) {
    if (input[i].toLocaleLowerCase() === 'a') {
        contador++;
    };
};

// - - - Print do resultado - - -
if (contador > 0) {
    console.log(`A palavra informada possui a letra A e ela aparece ${contador} vezes.`)
} else {
    console.log('A palavra informada não possui a letra A.')
}