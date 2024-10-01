// - - - Variáveis utilizadas - - -
let input = 10;
let comparador = 0;

// - - - Função que calcula o número na sequência de Fibonacci - - -
function fibonacci(n) {
    if (n <= 1) {
        return (comparador = n);
    };
    return (comparador = fibonacci(n - 1) + fibonacci(n - 2));
};

// - - - Laço que executa a função de fibonacci até chegar ou passar do input informado - - -
for (let i = 1; comparador < input; i++) {
    fibonacci(i);
};

// - - - Compara o valor chegado com o input e printa o resultado na tela - - -
if (comparador == input) {
    console.log(`O número ${input} pertence a sequência de Fibonacci.`);
} else {
    console.log(`O número ${input} não pertence a sequência de Fibonacci.`);
};