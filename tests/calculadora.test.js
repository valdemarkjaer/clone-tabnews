test("nome do teste", callbackFunction); // precisa de uma string de nome e uma função de call back, que executa o teste
function callbackFunction() {
    console.log("Essa função está sendo chamada?");
}

test("nome do teste 2", function() {       // teste com funcao anônima, sem declarar pra depois implementar funcao. Essa funcao fica embutida na chamada
    console.log("E essa função, funciona?");
});

test("teste arrow function", () => {       // teste com arrow function
    console.log("e agora?");
});

test("Testando outra condição do sistema", () => {
    console.log("outro teste")
});

test("espero que 1 seja 1", () => {    
    expect(1).toBe(1);     // expect é uma função do framework de testes jest. Aqui está: espere que 1 seja 1. Um teste tem dois lados. Esquerda: valor gerado por sistema, dinamico. Direita = expectativa. Hard Code é melhor
    // expect(2).toBe(1);     // aqui quebra
    // expect(funcaoSendoTestadaGeradaDinamica).toBe(resultadoFixo);  // chamada de um calculo do lado esquerdo gera tal valor do lado direito

});

