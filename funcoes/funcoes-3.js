// Função hoisting (Tradução: Hoisting = Elevar)

sayMyName();

function sayMyName(){
    console.log("Alguma coisa")
}

//Essa função recebe um HOISTING, o JavaScript transforma ela automaticamente como se fosse assim:

/*
    function sayMyName(){
    console.log("Alguma coisa")
}

    sayMyName();

*/

//Obs: Isso não se aplica a variáveis, exemplo:

/*
    sayMyName();

    const sayMayName = function(){
        console.log('Alguma coisa')
    }

    A execução dará ERRO
*/